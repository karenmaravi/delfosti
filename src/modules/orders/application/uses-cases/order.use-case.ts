import { RESPONSE_CODE } from "../../../../shared/interfaces/enum";
import { OrderRepository } from "../../domain/repositories/order.repository";
import { OrderCreateDto } from "../dtos/order-create.dto";
import { OrderUpdateDto } from "../dtos/order-update-status.dto";
import { ProductUseCase } from "../../../products/application/user-cases/product.user-case";
import { OrderService } from "../services/order.service";
import { OrderStatusUseCase } from "./order-status.use-case";

export class OrderUseCase {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly orderService: OrderService,
    private readonly productUseCase: ProductUseCase,
    private readonly orderStatusUseCaso: OrderStatusUseCase,
  ) {}
  async listAll(){
    const listOrder = await this.orderRepository.listAllOrder();
    const detail = await Promise.all(
      listOrder.map(async (x) => {
        const detail = await this.orderRepository.getOrderDetail(x.orderCode);
        return { ...x, detail }
      })
    );

    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'OK',
      data: detail,
    };
  }

  async getOrderById(orderCode: number){
    const listOrder = await this.orderRepository.getOrder(orderCode);
    if (!listOrder) {
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.ERROR,
        message: 'No se encontró el pedido.',
      };
    }
    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'OK',
      data: listOrder
    };
  }

  async generateOrder(params: OrderCreateDto) {
    // VALIDAR STOCK
    const validateStock = await this.orderService.validateDetailStock(params.orderDetail);
    if (!validateStock.validateFinal){
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.ERROR,
        message: 'Sin Stock Disponible ',
      };
    }

    // REGISTRAR ORDER
    const inputSaveOrder = {
      userRegistCode : params.userRegistCode,
      orderStatus : 'P'
    };
    console.log('inputSaveOrder', inputSaveOrder);
    const order = await this.orderRepository.createOrder(inputSaveOrder);
    const orderCode = order.orderCode;
    
    // REGISTRAR DETALLE DE ORDER

    const detail = await Promise.all(
      validateStock.detail.map(async (x) => {
        //await this.calculateStock(x.sku, x.quantityProduct);
        
        const totalAmount = x.unitPrice * x.quantityProduct;
        const inputSaveDetail = {
          orderCode: orderCode,
          sku: x.sku,
          quantityProduct: x.quantityProduct,
          unitPrice: x.unitPrice,
          totalAmount
        }

        await this.orderRepository.createOrderDetail(inputSaveDetail)
        return await this.productUseCase.updateStock(x.sku, x.newStock);
      })
    );
    console.log('detail',detail)
    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'OK',
      data: detail,
    };
  }


  async statusChange(params: OrderUpdateDto) {
    // Obtener lista de Status Order
    const listaStatus = await this.orderStatusUseCaso.listAll();
    if (!listaStatus.data) {
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.NOT_FOUND,
        message: `Estado actual no encontrado.`
      };
    };
    // Obtener Estado actual de Order
    const order = await this.getOrderById(params.orderCode);
    if(!order.data) {
      return order;
    }
    const actualStatusCode = order.data.orderStatus;
    // Obtener Jerarquia de Orden Actual
    const jsonStatus = await listaStatus.data.find(status => status.statusCode == actualStatusCode);
    if (!jsonStatus){
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.NOT_FOUND,
        message: `Estado actual no encontrado.`
      };
    }
    const hierarchyOrderActual = jsonStatus.hierarchyOrder;
    const statusNameActual = jsonStatus.statusName;
    console.log( `Estado actual de orden: ${statusNameActual} - Jerarquía ${hierarchyOrderActual}.`);
    console.log( `Estado Nuevo a cambiar: ${params.orderStatus}.`);
    // Obtener Status Permitidas
    const arrayOrderOk = listaStatus.data.filter(status => status.hierarchyOrder > hierarchyOrderActual);
    const validate = await arrayOrderOk.find((order) => order.statusCode === params.orderStatus);
    if (!validate) {
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.NOT_FOUND,
        message: `El estado actual del pedido es ${statusNameActual}. No se puede retroceder.`
      };
    }
    // Actualizar Orden
    const updateOrder = await this.orderRepository.updateOrder(params.orderCode, {
      orderStatus: params.orderStatus,
      userRegistCode: params.userRegistCode,
    })

    if (updateOrder.affected === 0) {
      return {
        statusCode: 500,
        responseCode: RESPONSE_CODE.ERROR,
        message: 'Error Interno.',
      };
    }
    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'OK',
      data: updateOrder
    };
  }
}

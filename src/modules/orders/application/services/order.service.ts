import { RESPONSE_CODE } from "../../../../shared/interfaces/enum";
import { OrderRepository } from "../../domain/repositories/order.repository";
import { OrderDetailDto } from "../dtos/order-create.dto";
import { OrderUpdateDto } from "../dtos/order-update-status.dto";
import { ProductUseCase } from "../../../products/application/user-cases/product.user-case";
import { ValidateStockInterface } from "../interfaces/validate-detail-stock.entity";
import { CalculateStockInterface } from "../interfaces/calculate-stock.interface";

export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly productUseCase: ProductUseCase,
    // private readonly orderStatusUseCaso: OrderStatusUseCase,
  ) {}
  async validateDetailStock (detail: OrderDetailDto[]): Promise<ValidateStockInterface>{
    let validateFinal = true;
    const validaDetail = await Promise.all(
      detail.map(async (product) => {
        let validate = true;
        const validaStock = await this.calculateStock(product.sku, product.quantityProduct);
        if (validaStock.statusCode !== 200) {
          validateFinal = false;
          validate = false;
        }
        return {
          ...product,
          actualStock: validaStock.data.actualStock, 
          newStock: validaStock.data.newStock,
          validate
        }
      })
    );
    return { validateFinal, detail: validaDetail };
  }

  async calculateStock(sku: string, quantityProduct: number): Promise<CalculateStockInterface> {
    const product = await this.productUseCase.getProduct(sku);
    const actualStock = product.data!.stock
    const newStock = actualStock - quantityProduct;

    if (newStock < 0){
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.ERROR,
        message: 'Sin Stock Disponible ',
        data: { actualStock, newStock }
      };
    }
    
    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Sin Stock Disponible ',
      data: { actualStock, newStock }
    };
  }

  async statusChange(params: OrderUpdateDto) {

    // this.orderStatusUseCaso.listAll();
    const jsonSave = {
      userRegistCode: params.userRegistCode,
      orderStatus: params.orderStatus,
    }
    return await this.orderRepository.updateOrder(params.orderCode, jsonSave)
  }
}

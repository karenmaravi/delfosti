import { RESPONSE_CODE } from "../../../../shared/interfaces/enum";
import { OrderStatusRepository } from "../../domain/repositories/order-status.repository";
import { OrderStatusValues } from "../../domain/values/order-status.value";
import { OrderStatusCreateDto } from "../dtos/status-create.dto";

export class OrderStatusUseCase {
  constructor(
    private readonly orderStatusRepository: OrderStatusRepository,
  ) {}
  public async listAll(){
    const listRol = await this.orderStatusRepository.list();
    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Lista de roles de usuario obtenido correctamente',
      data: listRol,
    };
  }

  public async getStatus(statusCode: string){
    const listRol = await this.orderStatusRepository.getStatus(statusCode);
    if (!listRol) {
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.NOT_FOUND,
        message: 'No se encontró el estados'
      };
    }
    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'OK',
      data: listRol,
    };
  }

  async create(params: OrderStatusCreateDto) {
    let statusDto = new OrderStatusValues(params);
    const user = await this.orderStatusRepository.create(statusDto)
    if (user === '99'){
      return {
        statusCode: 500,
        responseCode: RESPONSE_CODE.ERROR,
        message: 'Error Interno',
      };
    }
    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Usuario obtenido correctamente',
      data: user,
    };
  }

  async insertStatusDefault() {
    const arrayStatus = [
      { statusCode: 'P', statusName: 'Por Atender', hierarchyOrder: 1 },
      { statusCode: 'E', statusName: 'En Proceso', hierarchyOrder: 2 },
      { statusCode: 'D', statusName: 'En Delivery', hierarchyOrder: 3 },
      { statusCode: 'R', statusName: 'Recibido', hierarchyOrder: 4 },
    ]

    const userRoles = arrayStatus.map(async (x) => {
      const userRole = new OrderStatusValues(x);
      console.log('userRole', userRole);
      return await this.orderStatusRepository.create(userRole)
    });

    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Rol de usuario registrado correctamente',
      data: userRoles,
    };
  }
}

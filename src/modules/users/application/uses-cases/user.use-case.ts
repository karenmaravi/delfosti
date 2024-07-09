import { RESPONSE_CODE } from "../../../../shared/interfaces/enum";
import { UserRepository } from "../../domain/repositories/user.repository";
import { UserValues } from "../../domain/values/user.values";
import { UserCreateDto } from "../dtos/user-create.dto";
import { LoggerDto } from "../dtos/logger.dto";
import { UserService } from "../services/user.services";

export class UserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userService: UserService,
  ) {}
  async listAllUser(){
    const listAllUsers = await this.userRepository.listAll();
    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Lista de roles de usuario obtenido correctamente',
      data: listAllUsers,
    };
  }

  async createUser(params: UserCreateDto) {
    const password = params.password;
    const tokenPwd = await this.userService.encryptPassword(password)
    params.password = tokenPwd;
    let userDto = new UserValues(params);

    const user = await this.userRepository.create(userDto)
    if (!user){
      return {
        statusCode: 500,
        responseCode: RESPONSE_CODE.ERROR,
        message: 'Error Interno',
      };
    }
    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Usuario obtenido correctamente',
      // data: user,
    };
  }

  async validateUser(params: LoggerDto) {
    params.password = await this.userService.encryptPassword(params.password);
    const validate = await this.userRepository.getLogger(params);
    if(!validate){
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.NOT_FOUND,
        message: 'Email o Contraseña incorrecto.',
      };
    }
    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Usuario correcto'
    };
  }

  async createUserDefault() {
    const arrayProducts = [
      {
        "workerName": "Admin",
        "email": "admin@gmail.com",
        "password": "123456",
        "phone": "999999999",
        "jobTitle": "Desarrollador backend",
        "roleCode": "E"
      },
      {
        "workerName": "Repartidor",
        "email": "repartidor@gmail.com",
        "password": "123456",
        "phone": "999999999",
        "jobTitle": "Repartidor de pedidos",
        "roleCode": "D"
      },
    ]

    const products = arrayProducts.map(async (x) => {
      const userRole = new UserValues(x);
      return await this.userRepository.create(userRole)
    });

    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Usuarios registrados correctamente',
      data: products,
    };
  }
}

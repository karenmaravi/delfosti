import { RESPONSE_CODE } from "../../../../shared/interfaces/enum";
import { UserRoleDto } from "../dtos/user-role.dto";
import { UserRoleRepository } from "../../domain/repositories/user-role.repository";
import { UserRoleValues } from "../../domain/values/user-roles.values";

export class UserRoleUseCase {
  constructor(
    private readonly userRoleRepository: UserRoleRepository,
  ) {}
  public async listAllUserRol(){
    const listRol = await this.userRoleRepository.list();
    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Lista de roles de usuario obtenido correctamente',
      data: listRol,
    };
  }

  async createUserRol(params: UserRoleDto) {
    // let userRole = new UserRoleValues(params);
    let userRole = new UserRoleDto();
    userRole.roleCode = params.roleCode;
    userRole.roleName = params.roleName;

    const user = await this.userRoleRepository.create(userRole)
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
      message: 'Rol de usuario registrado correctamente',
      data: user,
    };
  }

  async createUserRolDefault() {
    const arrayRoles = [
      { roleCode: 'E', roleName: 'Encargado'},
      { roleCode: 'V', roleName: 'Vendedor'},
      { roleCode: 'D', roleName: 'Delivery'},
      { roleCode: 'R', roleName: 'Repartidor'},
    ]

    const userRoles = arrayRoles.map(async (x) => {
      const userRole = new UserRoleValues(x);
      console.log('userRole', userRole);
      return await this.userRoleRepository.create(userRole)
    });

    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Rol de usuario registrado correctamente',
      data: userRoles,
    };
  }
}

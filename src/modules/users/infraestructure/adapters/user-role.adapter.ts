import { UserRoleModel } from "../models/user-role.model";
import { UserRoleRepository } from "../../domain/repositories/user-role.repository";
import {UserRoleEntity} from "../../domain/entities/user-rol.entity";
import { UserRoleDto } from "../../application/dtos/user-role.dto";
import { Repository } from "typeorm";

export class UserRoleSqlAdapter implements UserRoleRepository {
  async list(): Promise<UserRoleEntity[]> {
    
    const user = await UserRoleModel.find();
    return user
  }

  public async create(params: any): Promise<any> {
    try {
      const create = await UserRoleModel.create(params);
      const entity = await UserRoleModel.save(create);
      return entity
    } catch (error) {
      console.log(error)
      return '99'
    }
  }
}

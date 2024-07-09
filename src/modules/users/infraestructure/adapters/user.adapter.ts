import { LoggerDto } from "../../application/dtos/logger.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";
import { UserModel } from "../models/user.model";

export class UserSqlAdapter implements UserRepository {
  async listAll(): Promise<UserModel[]> {
    const user = await UserModel.find();
    return user
  }
  async create(params: any): Promise<UserEntity> {
    const userCreate = await UserModel.create(params);
    const userSave = await UserModel.save(userCreate);
    return userSave;
  }

  async getLogger(params: LoggerDto): Promise<UserModel | null> {
    return await UserModel.findOne({where: {
      email: params.email,
      password: params.password
    }});
  }
}

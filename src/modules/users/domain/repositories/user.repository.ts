import { LoggerDto } from "../../application/dtos/logger.dto";
import { UserModel } from "../../infraestructure/models/user.model";
import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  listAll(): Promise<UserModel[]>;
  create(params: UserEntity): Promise<UserEntity>;
  getLogger(params: LoggerDto): Promise<any>;
}

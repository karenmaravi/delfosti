import { UserRoleDto } from "../../application/dtos/user-role.dto";
import { UserRoleEntity } from "../entities/user-rol.entity";

export interface UserRoleRepository {
  list(): Promise<UserRoleEntity[]>;
  create(params: UserRoleEntity): Promise<any>;
}

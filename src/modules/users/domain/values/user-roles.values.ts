import { UserRoleEntity } from "../entities/user-rol.entity";

export class UserRoleValues implements UserRoleEntity {
  roleCode: string;
  roleName: string;
  roleActive?: number;

  constructor({
    roleCode,
    roleName,
    roleActive,
  }: {
    roleCode: string,
    roleName: string,
    roleActive?: number,
  }) {
    this.roleCode = roleCode;
    this.roleName = roleName;
    this.roleActive = roleActive;
  }
}
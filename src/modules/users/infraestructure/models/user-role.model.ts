import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { UserModel } from './user.model';

@Entity({ name: 'tb_user_role', synchronize: true })
export class UserRoleModel extends BaseEntity {
  @PrimaryColumn({
    name: 'role_code',
    type: 'char',
    comment: 'Codigo de Rol',
  })
  roleCode: string;

  @Column({
    name: 'role_name',
    type: 'varchar',
    comment: 'Detalle del Rol',
  })
  roleName: string;

  @Column({
    name: 'active',
    type: 'bit',
    comment: 'Rol de usuario activo?',
    default: 1,
  })
  roleActive: number;

}

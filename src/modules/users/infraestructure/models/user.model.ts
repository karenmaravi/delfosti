import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, OneToOne, ManyToOne, ManyToMany } from 'typeorm';
import { UserRoleModel } from './user-role.model';
import { OrderModel } from '../../../orders/infraestructure/models/order.model';

@Entity({ name: 'tb_user', synchronize: true })
export class UserModel extends BaseEntity{
  @PrimaryGeneratedColumn({
    name: 'user_code',
    type: 'int',
    comment: 'Codigo de usuario',
  })
  userCode: number;

  @Column({
    name: 'worker_name',
    type: 'varchar',
    comment: 'Nombre de trabajador',
  })
  workerName: string;

  @Column({
    name: 'user_email',
    type: 'varchar',
    comment: 'Email',
    unique: true
  })
  email: string;

  @Column({
    name: 'user_password',
    type: 'varchar',
    comment: 'Contraseña',
  })
  password: string;

  @Column({
    name: 'user_phone',
    type: 'varchar',
    comment: 'Celular',
  })
  phone: string;

  @Column({
    name: 'user_job_title',
    type: 'varchar',
    comment: 'Puesto Laboral',
  })
  jobTitle: string;


  @ManyToOne(() => UserRoleModel, (role) => role.roleCode)
  @Column({
      name: 'role_code',
      type: 'char',
      comment: 'Codigo de Rol',
  })
  @JoinColumn({name: 'role_code'})
  roleCode: UserRoleModel;

  @Column({
    name: 'user_active',
    type: 'bit',
    comment: 'Usuario activo?',
    default: 1,
  })
  active: number;

  @CreateDateColumn({
    name: 'date_regist',
    type: 'datetime',
    comment: 'Fecha de registro',
  })
  createdAt: Date;
}

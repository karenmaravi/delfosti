import { IsNotEmpty, IsString } from "class-validator";

export class UserRoleDto {
  @IsString({ message: 'El campo roleCode debe ser string.' })
  @IsNotEmpty({ message: 'El campo roleCode no puede estar vacío o null.' })
  roleCode: string;

  @IsString({ message: 'El campo roleName debe ser string.' })
  @IsNotEmpty({ message: 'El campo roleName no puede estar vacío o null.' })
  roleName: string;
}
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserCreateDto {
  @IsString({ message: 'El campo workerName debe ser string.' })
  @IsNotEmpty({ message: 'El campo workerName no puede estar vacío o null.' })
  workerName: string;

  @IsString({ message: 'El campo email debe ser string.' })
  @IsNotEmpty({ message: 'El campo email no puede estar vacío o null.' })
  email: string;

  @IsString({ message: 'El campo password debe ser string.' })
  @IsNotEmpty({ message: 'El campo password no puede estar vacío o null.' })
  password: string;

  @IsString({ message: 'El campo phone debe ser string.' })
  @IsOptional()
  phone: string;

  @IsString({ message: 'El campo jobTitle debe ser string.' })
  @IsNotEmpty({ message: 'El campo jobTitle no puede estar vacío o null.' })
  jobTitle: string;

  @IsString({ message: 'El campo roleCode debe ser string.' })
  @IsNotEmpty({ message: 'El campo roleCode no puede estar vacío o null.' })
  roleCode: string;
}

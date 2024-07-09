import { UserEntity } from "../entities/user.entity";

export class UserValues implements UserEntity {
  workerName: string;
  email: string;
  password: string;
  phone: string;
  jobTitle: string;
  roleCode: string;

  constructor({
    workerName,
    email,
    password,
    phone,
    jobTitle,
    roleCode,
  }: {
    workerName: string;
    email: string;
    password: string;
    phone: string;
    jobTitle: string;
    roleCode: string;
  }) {
    this.workerName = workerName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.jobTitle = jobTitle;
    this.roleCode = roleCode;
  }
}
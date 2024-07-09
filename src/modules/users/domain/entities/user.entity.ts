
export interface UserEntity {
  userCode?: number;
  workerName: string;
  email: string;
  password: string;
  phone: string;
  jobTitle: string;
  roleCode: string;
  active?: number;
  createdAt?: Date;
}

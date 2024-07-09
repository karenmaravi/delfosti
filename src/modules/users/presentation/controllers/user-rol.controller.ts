import { Request, Response, Router } from "express";
import { UserRoleUseCase } from "../../application/uses-cases/user-rol.use-case";

export class UserRolController {
  constructor(
    private userRolUseCase: UserRoleUseCase,
  ) {}

  userRolDefault = async() => {
    return this.userRolUseCase.createUserRolDefault();
  }

  listAllUserRol = async(req: Request, res: Response) => {
    const user = await this.userRolUseCase.listAllUserRol();
    console.log('user', user);
    res.send(user);
  }

  createUserRol = async(req: Request, res: Response) => {
    const user = await this.userRolUseCase.createUserRol(req.body);
    console.log('user', user);
    res.send(user);
  }
}
import { Request, Response } from "express";
import { UserUseCase } from "../../application/uses-cases/user.use-case";

export class UserContoller {
  constructor(
    private userUseCase: UserUseCase,
  ) {}
  usersDefault = async() => {
    return this.userUseCase.createUserDefault();
  }

  listAllUser = async(req: Request, res: Response) => {
    const user = await this.userUseCase.listAllUser();
    console.log('user', user);
    res.send(user);
  }

  createUser = async(req: Request, res: Response) => {
    const user = await this.userUseCase.createUser(req.body);
    console.log('user', user);
    res.send(user);
  }

  validateUser = async(req: Request, res: Response) => {
    const user = await this.userUseCase.validateUser(req.body);
    console.log('user', user);
    res.send(user);
  }
}
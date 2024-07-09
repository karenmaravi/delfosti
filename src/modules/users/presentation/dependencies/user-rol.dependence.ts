import { UserService } from '../../application/services/user.services';
import { UserRoleUseCase } from '../../application/uses-cases/user-rol.use-case';
import { UserUseCase } from '../../application/uses-cases/user.use-case';
import { UserRoleSqlAdapter } from '../../infraestructure/adapters/user-role.adapter';
import { UserSqlAdapter } from '../../infraestructure/adapters/user.adapter';
import { UserContoller } from '../controllers/user-controller';
import { UserRolController } from '../controllers/user-rol.controller';

export const userRoleSqlAdapter = new UserRoleSqlAdapter();
export const userRolService = new UserRoleUseCase(userRoleSqlAdapter);
export const userRolController = new UserRolController(userRolService);


export const userSqlAdapter = new UserSqlAdapter();
export const userService = new UserService();
export const userUseCase= new UserUseCase(userSqlAdapter, userService);
export const userController = new UserContoller(userUseCase);

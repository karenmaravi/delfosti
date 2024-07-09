import { Router } from "express";
import { userController, userRolController } from "../dependencies/user-rol.dependence";

const route = Router()

route.get('/list-rol', userRolController.listAllUserRol);
route.post('/create-rol', userRolController.createUserRol);

route.get('/list', userController.listAllUser);
route.post('/create', userController.createUser);
route.post('/validate', userController.validateUser);

export default route;
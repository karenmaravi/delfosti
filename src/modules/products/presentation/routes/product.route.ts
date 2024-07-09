import { Router } from "express";
import { productController } from "../dependencies/product.dependence";

const route = Router()

route.get('/list', productController.listAll);
route.post('/create', productController.create);

export default route;
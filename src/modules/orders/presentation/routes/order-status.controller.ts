import { Router } from "express";
import { orderStatusController, orderController } from "../dependencies/order.dependence";

const route = Router()

route.get('/list-status', orderStatusController.listAll);
route.post('/create-status', orderStatusController.create);
route.get('/list', orderController.listAll);
route.post('/create', orderController.create);
route.put('/update-status', orderController.updateStatus);

export default route;
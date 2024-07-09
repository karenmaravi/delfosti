import { OrderStatusUseCase } from "../../application/uses-cases/order-status.use-case";
import { OrderUseCase } from "../../application/uses-cases/order.use-case";
import { OrderStatusAdapter } from "../../infraestructure/adapters/order-status.adapter";
import { OrderAdapter } from "../../infraestructure/adapters/order.adapter";
import { OrderStatusContoller } from "../controllers/order-status.controller";
import { OrderContoller } from "../controllers/order.controller";
import { productCase } from "../../../products/presentation/dependencies/product.dependence";
import { OrderService } from "../../application/services/order.service";

export const orderStatusAdapter = new OrderStatusAdapter();
export const orderStatusUseCase= new OrderStatusUseCase(orderStatusAdapter);
export const orderStatusController = new OrderStatusContoller(orderStatusUseCase);


export const orderAdapter = new OrderAdapter();
export const orderService = new OrderService(orderAdapter, productCase);
export const orderUseCase = new OrderUseCase(orderAdapter,orderService, productCase, orderStatusUseCase);
export const orderController = new OrderContoller(orderUseCase);
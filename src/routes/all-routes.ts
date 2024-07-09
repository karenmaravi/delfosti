import { Router } from "express";
import userRolRoute from "../modules/users/presentation/routes/user-rol.route";
import productRoute from "../modules/products/presentation/routes/product.route";
import orderRoute from "../modules/orders/presentation/routes/order-status.controller";

const router = Router();

router.use('/user', userRolRoute)
router.use('/product', productRoute)
router.use('/order', orderRoute)

export default router;

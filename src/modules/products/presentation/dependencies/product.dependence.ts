import { ProductUseCase } from "../../application/user-cases/product.user-case";
import { ProductAdapter } from "../../infraestructure/adapters/product.adapter";
import { ProductContoller } from "../controllers/product.controller";

export const productAdapter = new ProductAdapter();
export const productCase= new ProductUseCase(productAdapter);
export const productController = new ProductContoller(productCase);
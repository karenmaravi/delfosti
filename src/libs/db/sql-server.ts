import { DataSource } from "typeorm";
import { UserModel } from "../../modules/users/infraestructure/models/user.model";
import { UserRoleModel } from "../../modules/users/infraestructure/models/user-role.model";
import { ProductModel } from "../../modules/products/infraestructure/models/product.model";
import { OrderModel } from "../../modules/orders/infraestructure/models/order.model";
import { OrderStatusModel } from "../../modules/orders/infraestructure/models/order_status.model";
import { OrderDetailModel } from "../../modules/orders/infraestructure/models/order_detail.model";
const dotenv = require('dotenv').config();

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "localhost",
  port: 1433,
  username: "user_delfosti",
  password: "pass_delfosti",
  database: "db_delfosti_test",
  synchronize: true,
  logging: true,
  entities: [
    UserModel, 
    UserRoleModel, 
    ProductModel, 
    OrderModel, 
    OrderStatusModel, 
    OrderDetailModel
  ],
  stream: false,
  // subscribers: [],
  // migrations: [],
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
})
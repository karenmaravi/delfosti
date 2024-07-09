import app from './app';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { AppDataSource } from './libs/db/sql-server';
import { userRolController, userController } from './modules/users/presentation/dependencies/user-rol.dependence';
import { orderStatusController } from './modules/orders/presentation/dependencies/order.dependence';
import { productController } from './modules/products/presentation/dependencies/product.dependence';

const port = process.env.PORT || 3000;
dotenv.config();

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Database conectada')

    app.get('/', (req, res) => {
      res.send('Backend Nodejs - Express - Ruth Maravi')
    })
    
    app.listen(port, () => {
      console.log('Server listening on port ', port);
    })

    // Cargar Valores de TABLA 
    Promise.all([
      userRolController.userRolDefault(),
      orderStatusController.orderStatuslDefault(),
      productController.productsDefault(),
      //userController.usersDefault(),
    ]);
  } catch (error) {
    console.log('Database not conection', error)
  }
  
}

main();

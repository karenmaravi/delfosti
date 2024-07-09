import { RESPONSE_CODE } from "../../../../shared/interfaces/enum";
import { ProductRepository } from "../../domain/repositories/product.repository";
import { ProductValues } from "../../domain/values/product.value";
import { ProductCreateDto } from "../dtos/product-create.dto";

export class ProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository,
  ) {}
  public async listAll(){
    const listRol = await this.productRepository.list();

    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'OK',
      data: listRol,
    };
  }

  public async getProduct(sku: string){
    const listRol = await this.productRepository.getProduct(sku);
    if (!listRol) {
      return {
        statusCode: 400,
        responseCode: RESPONSE_CODE.NOT_FOUND,
        message: 'No se encontró el producto'
      };
    }
    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'OK',
      data: listRol,
    };
  }

  async create(params: ProductCreateDto) {
    let productDto = new ProductCreateDto();
    productDto.sku = params.sku;
    productDto.productName = params.productName;
    productDto.productType = params.productType;
    productDto.productLabel = params.productLabel;
    productDto.price = params.price;
    productDto.unitMeasurement = params.unitMeasurement;
    productDto.stock = params.stock;

    
    const user = await this.productRepository.create(productDto)
    if (user === '99'){
      return {
        statusCode: 500,
        responseCode: RESPONSE_CODE.ERROR,
        message: 'Error Interno',
      };
    }
    return {
      statusCode: 200,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Usuario obtenido correctamente',
      data: user,
    };
  }

  async updateStock(sku: string, newStock: number) {
    const upd = await this.productRepository.update(sku, { stock: newStock });
    return upd;
  }

  async createProductDefault() {
    const arrayProducts = [
      {
        sku: "P0000001",
        productName: "Detergente Bolivar",
        productType: "Limpieza",
        productLabel: "250 g limón",
        price: 7.00,
        stock: 30,
        unitMeasurement: "g"
      },
      {
        sku: "P0000002",
        productName: "Lavavajilla",
        productType: "Limpieza",
        productLabel: "750 g limón",
        price: 5.00,
        stock: 20,
        unitMeasurement: "g"
      },
      {
        sku: "P0000003",
        productName: "Galleta Oreo",
        productType: "Comestible",
        productLabel: "750 g limón",
        price: 5.00,
        stock: 20,
        unitMeasurement: "g"
      },
    ]

    const products = arrayProducts.map(async (x) => {
      const userRole = new ProductValues(x);
      return await this.productRepository.create(userRole)
    });

    return {
      statusCode: 201,
      responseCode: RESPONSE_CODE.SUCCESS,
      message: 'Rol de usuario registrado correctamente',
      data: products,
    };
  }
}

//import sequelize model
import Producto from "../models/mssqlModels/productos.model.js";

export class ProductRepository {
  async getAllProducts() {
    return await Producto.findAll();
  }

  async createProduct(data) {
    return await Producto.create(data);
  }

  async updateProduct(id, data) {
    return await Producto.update(data, {
      where: { id }
    });
  }

  async deleteProduct(id) {
    return await Producto.destroy({
      where: { id }
    });
  }
}
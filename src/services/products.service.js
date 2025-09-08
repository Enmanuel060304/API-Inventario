export class ProductService {
  constructor({ ProductRepository }) {
    this.productRepository = ProductRepository
  }

  async getAllProducts() {
    return await this.productRepository.getAllProducts()
  }

  async createProduct(data) {
    return await this.productRepository.createProduct(data)
  }

  async updateProduct(id, data) {
    return await this.productRepository.updateProduct(id, data)
  }

  async deleteProduct(id) {
    return await this.productRepository.deleteProduct(id)
  }
}
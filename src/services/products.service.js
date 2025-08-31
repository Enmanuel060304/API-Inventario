export class ProductService {
  constructor({ ProductRepository }) {
    this.productRepository = ProductRepository
  }

  async getAllProducts() {
    return this.productRepository.getAllProducts()
  }

  async createProduct(data) {
    return this.productRepository.createProduct(data)
  }

  async updateProduct(id, data) {
    return this.productRepository.updateProduct(id, data)
  }

  async deleteProduct(id) {
    return this.productRepository.deleteProduct(id)
  }
}
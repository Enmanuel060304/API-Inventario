export class ProductsController {
  constructor({ ProductService }) {
    this.productService = ProductService
  }

  getProducts = async (req, res) => {
    try {
      const products = await this.productService.getAllProducts()
      res.json(products)
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener productos' })
    }
  }

  createProduct = async (req, res) => {
    try {
      const newProduct = await this.productService.createProduct(req.body)
      res.status(201).json(newProduct)
    } catch (error) {
      res.status(400).json({ error: 'Error al crear producto' })
    }
  }

  updateProduct = async (req, res) => {
    try {
      const updatedProduct = await this.productService.updateProduct(req.params.id, req.body)
      res.json(updatedProduct)
    } catch (error) {
      res.status(404).json({ error: 'Producto no encontrado' })
    }
  }

  deleteProduct = async (req, res) => {
    try {
      await this.productService.deleteProduct(req.params.id)
      res.status(204).send()
    } catch (error) {
      res.status(404).json({ error: 'Producto no encontrado' })
    }
  }
}
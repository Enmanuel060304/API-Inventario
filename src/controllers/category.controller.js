export class CategoryController {
  constructor({ CategoryService }) {
    this.categoryService = CategoryService
  }
  
  getCategories = async (req, res) => {
    try {
      const data = await this.categoryService.getCategories()
      res.json(data)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  createCategory = async (req, res) => {
    try {
      const { nombre, descripcion } = req.body
      const result = await this.categoryService.createCategory({ nombre, descripcion })
      res.json(result)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  
}
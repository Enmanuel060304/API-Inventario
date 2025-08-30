export class CategoryController {
  constructor({ CategoryService }) {
    this.categoryService = CategoryService
  }
  
  getCategories = async (req, res) => {
    try {
      const data = await this.categoryService.getCategories()
      res.json(data)
    } catch (error) {
      res.status(400).send({ message: error.message })
    }
  }

  
}
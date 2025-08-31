export class CategoryService {
  constructor({ CategoryRepository }) {
    this.categoryRepository = CategoryRepository
  } 

  getCategories = async () => await this.categoryRepository.getCategories()
  
  createCategory = async ({ nombre, descripcion }) => await this.categoryRepository.createCategory({ nombre, descripcion })

  updateCategory = async ({ id, nombre, descripcion }) => await this.categoryRepository.updateCategory({ id, nombre, descripcion })

  deleteCategory = async (id) => await this.categoryRepository.deleteCategory({ id })
}
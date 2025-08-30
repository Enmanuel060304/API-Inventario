export class CategoryService {
  constructor({ CategoryRepository }) {
    this.categoryRepository = CategoryRepository
  } 

  getCategories = async () => await this.categoryRepository.getCategories()
  
  createCategory = async ({ nombre, descripcion }) => await this.categoryRepository.createCategory({ nombre, descripcion })

  
}
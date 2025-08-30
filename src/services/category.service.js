export class CategoryService {
  constructor({ CategoryRepository }) {
    this.categoryRepository = CategoryRepository
  } 

  getCategories = async () => {
    const data = await this.categoryRepository.getCategories()
    return data
  }
}
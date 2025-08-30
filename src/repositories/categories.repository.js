import Categoria from '../models/mssqlModels/categorias.model.js'

export class CategoryRepository {
  async getCategories () {
    const data = await Categoria.findAll({})
    return data
  }
}
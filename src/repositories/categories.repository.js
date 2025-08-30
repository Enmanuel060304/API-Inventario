import Categoria from '../models/mssqlModels/categorias.model.js'

export class CategoryRepository {
  getCategories = async () => await Categoria.findAll({})

  createCategory = async ({ nombre, descripcion }) => {
    const result = await Categoria.findOne({
      where: {
        nombre
      }
    })

    if(result) throw new Error("nombre de categoria ya en uso")

    return await Categoria.create({ nombre, descripcion })
  }
}
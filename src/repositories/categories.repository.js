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

  updateCategory =  async ({ id, nombre, descripcion }) => {
      const category = await Categoria.findByPk(id)
      if (!category) throw new Error("Categoría no encontrada")

      if (category.nombre !== nombre) {
        const existingCategory = await Categoria.findOne({ where: { nombre } })
        if (existingCategory) throw new Error("nombre de categoria ya en uso")
      }

      await Categoria.update({ nombre, descripcion }, {
        where: {
          id
        }
      })

      return await Categoria.findByPk(id)
  }

  deleteCategory = async ({ id }) => await Categoria.destroy({ where: { id } })
}
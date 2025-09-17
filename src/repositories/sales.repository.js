import VentasModel from '../models/mssqlModels/venta.model.js'
import { Op } from 'sequelize';

export class VentasRepository {

  findAll = async () => await VentasModel.findAll({
    where: {
      estado: { [Op.ne]: 'ANULADA' }
    }
  })

  create = async (ventaData) => await VentasModel.create(ventaData)

  findById = async (id) => await VentasModel.findByPk(id)

  update = async (id, ventaData) => {
    const venta = await VentasModel.findByPk(id)
    if (!venta) return null

    return await venta.update(ventaData)
  }

  delete = async (id) => {
    const venta = await VentasModel.findByPk(id)
    if (!venta) return null

    await venta.destroy()
    return venta
  }
}
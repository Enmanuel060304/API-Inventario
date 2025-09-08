import Proveedor from "../models/mssqlModels/proveedor.model.js";

export class ProviderRepository {
  async getAll() {
    return await Proveedor.findAll();
  }

  async create({ data }) {
    // Buscar si ya existe un proveedor con el mismo email
    const result = await Proveedor.findOne({ where: { email: data.email } });
    if (result) {
      throw new Error('El proveedor ya existe');
    }
    return await Proveedor.create(data);
  }

  async update({ id, data }) {
    await Proveedor.update(data, {
      where: { id }
    });

    const updated = await Proveedor.findByPk(id);
    return updated;
  }

  async delete({ id }) {
    return await Proveedor.destroy({
      where: { id }
    });
  }
}
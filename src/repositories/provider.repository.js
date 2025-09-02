import Proveedor from "../models/mssqlModels/proveedor.model.js";

export class ProviderRepository {
  async getAll() {
    return await Proveedor.findAll();
  }

  async createProvider({ data }) {

    const result = await Proveedor.findByPk(data.email)

    if (!result) {
      throw new Error('El proveedor ya existe');
    }

    return await Proveedor.create(data);
  }

  async updateProvider({ id, data }) {
    await Proveedor.update(data, {
      where: { id }
    });

    const updated = await Proveedor.findByPk(id);
    return updated;
  }

  async deleteProvider({ id }) {
    return await Proveedor.destroy({
      where: { id }
    });
  }
}
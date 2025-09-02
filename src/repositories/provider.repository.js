import Proveedor from "../models/mssqlModels/proveedor.model.js";

export class ProviderRepository {
  async getAll() {
    return await Proveedor.findAll();
  }

  async createProvider({ data }) {
    return await Proveedor.create(data);
  }

  async updateProvider({ id, data }) {
    return await Proveedor.update(data, {
      where: { id }
    });
  }

  async deleteProvider({ id }) {
    return await Proveedor.destroy({
      where: { id }
    });
  }
}
import Cliente from "../models/mssqlModels/cliente.model.js";

export class ClienteRepository {
  create = async (clientData) => {
    const newClient = await Cliente.create(clientData);
    return newClient;
  }

  getAll = async () => {
    const clients = await Cliente.findAll();
    return clients;
  }

  getById = async (id) => {
    const client = await Cliente.findByPk(id);
    return client;
  }

  update = async (id, clientData) => {
    await Cliente.update(clientData, { where: { id } });
    const updatedClient = await Cliente.findByPk(id);
    return updatedClient;
  }

  delete = async (id) => {
    await Cliente.destroy({ where: { id } });
    return { id };
  }
}
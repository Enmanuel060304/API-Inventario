export class ClienteService {
  constructor({ ClienteRepository }) {
    this.ClienteRepository = ClienteRepository;
  }

  createClient = async (clientData) => {
    return await this.ClienteRepository.create(clientData);
  }

  getAllClients = async () => {
    return await this.ClienteRepository.getAll();
  }

  getClientById = async (id) => {
    return await this.ClienteRepository.getById(id);
  }

  updateClient = async (id, clientData) => {
    return await this.ClienteRepository.update(id, clientData);
  }

  deleteClient = async (id) => {
    return await this.ClienteRepository.delete(id);
  }
}
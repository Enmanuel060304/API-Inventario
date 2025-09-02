export class ProviderService {
  constructor({ ProviderRepository }) {
    this.ProviderRepository = ProviderRepository
  }

  async findAll() {
    return this.ProviderRepository.getAll()
  }

  async create({ data }) {
    return this.ProviderRepository.createProvider({ data })
  }

  async update({ id, data }) {
    return this.ProviderRepository.updateProvider({ id, data })
  }

  async delete({ id }) {
    return this.ProviderRepository.deleteProvider({ id })
  }
}
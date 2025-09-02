export class ProviderService {
  constructor({ ProviderRepository }) {
    this.ProviderRepository = ProviderRepository
  }

  async findAll() {
    return await this.ProviderRepository.getAll()
  }

  async create(data) {
    return await this.ProviderRepository.createProvider({ data })
  }

  async update({ id, data }) {
    return await this.ProviderRepository.updateProvider({ id, data })
  }

  async delete({ id }) {
    return await this.ProviderRepository.deleteProvider({ id })
  }
}
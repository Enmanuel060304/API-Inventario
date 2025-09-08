export class ProviderService {
  constructor({ ProviderRepository }) {
    this.ProviderRepository = ProviderRepository
  }

  async findAll() {
    return await this.ProviderRepository.getAll()
  }

  async create(data) {
    return await this.ProviderRepository.create({ data })
  }

  async update({ id, data }) {
    return await this.ProviderRepository.update({ id, data })
  }

  async delete({ id }) {
    return await this.ProviderRepository.delete({ id })
  }
}
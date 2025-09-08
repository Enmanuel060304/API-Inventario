export class ProviderController {
  constructor({ ProviderService }) {
    console.log(ProviderService);
    this.ProviderService = ProviderService;
  }

  getAll = async (req, res) => {
    try {
      const providers = await this.ProviderService.findAll()
      res.json(providers)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  create = async (req, res) => {
    try {
      const provider = await this.ProviderService.create(req.body)
      res.status(201).json(provider)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  update = async (req, res) => {
    const { id } = req.params
    try {
      const provider = await this.ProviderService.update({ id, data: req.body })
      res.json(provider)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  delete = async (req, res) => {
    const { id } = req.params
    try {
      await this.ProviderService.delete({ id })
      res.status(204).end()
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
}
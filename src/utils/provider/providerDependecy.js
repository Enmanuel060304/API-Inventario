import providerRouter from '../../routes/provider.route.js'
import { ProviderRepository } from '../../repositories/provider.repository.js'
import { ProviderService } from '../../services/provider.service.js'
import { ProviderController } from '../../controllers/provider.controller.js'

const repository = new ProviderRepository()
const service = new ProviderService({ProviderRepository: repository})
const controller = new ProviderController({ProviderService: service})
const router = providerRouter({ProviderController: controller})

export default router
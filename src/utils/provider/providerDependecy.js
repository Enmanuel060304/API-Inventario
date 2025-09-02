import { ProviderRepository } from "../../repositories/provider.repository.js"
import { ProviderService } from "../../services/provider.service.js"
import { ProviderController } from '../../controllers/provider.controller.js'
import { providerRoutes } from "../../routes/provider.route.js"

const providerRepository = new ProviderRepository()
const providerService = new ProviderService({ ProviderRepository: providerRepository })
const providerController = new ProviderController({ ProviderService: providerService })
const providerRouter = providerRoutes({ ProviderController: providerController })

export { providerRouter }
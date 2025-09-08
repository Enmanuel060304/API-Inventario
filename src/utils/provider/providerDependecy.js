import { ProviderRepository } from "../../repositories/provider.repository.js"
import { ProviderService } from "../../services/provider.service.js"
import { ProviderController } from "../../controllers/provider.controller.js"
import { CreateProviderRoutes } from "../../routes/provider.route.js"

const providerRepository = new ProviderRepository();
const providerService = new ProviderService({ ProviderRepository: providerRepository });
const providerController = new ProviderController({ ProviderService: providerService });
const createProviderRouter = CreateProviderRoutes({ ProviderController: providerController });

export default createProviderRouter;

import { Router } from "express"

export default ({ ProviderController }) => {
  const router = Router()


  router.get('/', ProviderController.getAllProviders.bind(ProviderController))
  router.post('/', ProviderController.createProvider.bind(ProviderController))
  router.patch('/:id', ProviderController.updateProvider.bind(ProviderController))
  router.delete('/:id', ProviderController.deleteProvider.bind(ProviderController))

  return router
}
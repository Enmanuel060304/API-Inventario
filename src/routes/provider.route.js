import { Router } from "express"

export const providerRoutes = ({ProviderController}) => {
  const router = Router()

  router.get('/', ProviderController.getAllProviders)
  router.post('/', ProviderController.createProvider)
  router.patch('/:id', ProviderController.updateProvider)
  router.delete('/:id', ProviderController.deleteProvider)

  return router
}
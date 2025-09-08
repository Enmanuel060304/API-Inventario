import { Router } from "express"

export const CreateProviderRoutes = ({ ProviderController }) => {
  const router = Router()

  router.get('/', ProviderController.getAll.bind(ProviderController))
  router.post('/', ProviderController.create.bind(ProviderController))
  router.patch('/:id', ProviderController.update.bind(ProviderController))
  router.delete('/:id', ProviderController.delete.bind(ProviderController))

  return router
}
import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validateSalesBody } from '../middlewares/sales/bodySales.middleware.js';


const createRouter = ({ VentasController }) => {
  const router = Router();

  router.get('/', authMiddleware, VentasController.getVentas)
  router.post('/', authMiddleware, validateSalesBody, VentasController.createVenta)
  router.get('/:id', authMiddleware, VentasController.getVentaById)
  router.patch('/:id', authMiddleware, validateSalesBody, VentasController.updateVenta)
  router.delete('/:id', authMiddleware, VentasController.deleteVenta)

  return router
}

export default createRouter;
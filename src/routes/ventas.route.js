import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validateSalesBody } from '../middlewares/sales/bodySales.middleware.js';


const createRouter = ({ VentasController }) => {
  const router = Router();

  /**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Endpoints para la gestión de ventas
 */

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de ventas
 *       401:
 *         description: No autorizado
 */
router.get('/', authMiddleware, VentasController.getVentas)

/**
 * @swagger
 * /ventas:
 *   post:
 *     summary: Crear una nueva venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       201:
 *         description: Venta creada
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado
 */
router.post('/', authMiddleware, validateSalesBody, VentasController.createVenta)

/**
 * @swagger
 * /ventas/{id}:
 *   get:
 *     summary: Obtener una venta por ID
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta encontrada
 *       404:
 *         description: Venta no encontrada
 *       401:
 *         description: No autorizado
 */
router.get('/:id', authMiddleware, VentasController.getVentaById)

/**
 * @swagger
 * /ventas/{id}:
 *   patch:
 *     summary: Actualizar una venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la venta
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venta'
 *     responses:
 *       200:
 *         description: Venta actualizada
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Venta no encontrada
 *       401:
 *         description: No autorizado
 */
router.patch('/:id', authMiddleware, validateSalesBody, VentasController.updateVenta)

/**
 * @swagger
 * /ventas/{id}:
 *   delete:
 *     summary: Eliminar una venta
 *     tags: [Ventas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID de la venta
 *     responses:
 *       200:
 *         description: Venta eliminada
 *       404:
 *         description: Venta no encontrada
 *       401:
 *         description: No autorizado
 */
router.delete('/:id', authMiddleware, VentasController.deleteVenta)

  return router
}

export default createRouter;
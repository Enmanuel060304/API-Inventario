
/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: Endpoints para la gestión de proveedores
 */
import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import bodyValide from "../middlewares/provider/provider.Middlware.js"

export const CreateProviderRoutes = ({ ProviderController }) => {
  const router = Router()
  router.use(authMiddleware)

  /**
   * @swagger
   * /proveedores:
   *   get:
   *     summary: Obtener todos los proveedores
   *     tags: [Proveedores]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de proveedores
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Proveedor'
   */
  router.get('/', ProviderController.getAll)

  /**
   * @swagger
   * /proveedores:
   *   post:
   *     summary: Crear un nuevo proveedor
   *     tags: [Proveedores]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Proveedor'
   *     responses:
   *       201:
   *         description: Proveedor creado exitosamente
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Proveedor'
   */
  router.post('/', bodyValide, ProviderController.create)

  /**
   * @swagger
   * /proveedores/{id}:
   *   patch:
   *     summary: Actualizar proveedor por ID
   *     tags: [Proveedores]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID del proveedor
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Proveedor'
   *     responses:
   *       200:
   *         description: Proveedor actualizado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Proveedor'
   */
  router.patch('/:id', bodyValide, ProviderController.update)

  /**
   * @swagger
   * /proveedores/{id}:
   *   delete:
   *     summary: Eliminar proveedor por ID
   *     tags: [Proveedores]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID del proveedor
   *     responses:
   *       204:
   *         description: Proveedor eliminado exitosamente
   */
  router.delete('/:id', ProviderController.delete)

  return router
}
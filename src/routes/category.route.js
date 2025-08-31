
/**
 * @swagger
 * tags:
 *   name: Categorías
 *   description: Endpoints para gestión de categorías
 */
import { Router } from 'express'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import  { ValidateBody, ValidateUpdateBody } from '../middlewares/Category/Category.middleware.js'

const createCategoryRouter = ({ CategoryController }) => {
  const router = Router()


  /**
   * @swagger
   * /categorias:
   *   get:
   *     summary: Obtener todas las categorías
   *     tags: [Categorías]
  *     description: (Ruta protegida, requiere autenticación)
  *     responses:
  *       200:
  *         description: Lista de categorías
   */
  router.get('/',authMiddleware,(req, res) => CategoryController.getCategories(req, res))

  /**
   * @swagger
   * /categorias:
   *   post:
   *     summary: Crear una nueva categoría
   *     tags: [Categorías]
  *     security:
  *       - bearerAuth: []
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             type: object
  *             properties:
   *               nombre:
   *                 type: string
   *     responses:
   *       201:
   *         description: Categoría creada
   *       400:
   *         description: Datos inválidos
   */
  router.post('/',authMiddleware, ValidateBody, (req, res) => CategoryController.createCategory(req, res))

  /**
   * @swagger
   * /categorias/{id}:
   *   patch:
   *     summary: Actualizar una categoría
   *     tags: [Categorías]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID de la categoría
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               nombre:
   *                 type: string
   *     responses:
   *       200:
   *         description: Categoría actualizada
   *       400:
   *         description: Datos inválidos
   *       404:
   *         description: Categoría no encontrada
   */
  router.patch('/:id', authMiddleware, ValidateUpdateBody, (req, res) => CategoryController.updateCategory(req, res))


  /**
   * @swagger
   * /categorias/{id}:
   *   delete:
   *     summary: Eliminar una categoría
   *     tags: [Categorías]
  *     security:
  *       - bearerAuth: []
  *     parameters:
  *       - in: path
  *         name: id
  *         required: true
  *         schema:
  *           type: string
  *         description: ID de la categoría
  *     responses:
  *       200:
  *         description: Categoría eliminada
  *       404:
  *         description: Categoría no encontrada
   */
  router.delete('/:id',authMiddleware, (req, res) => CategoryController.deleteCategory(req, res))

  return router
}

export default createCategoryRouter

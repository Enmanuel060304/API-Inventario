
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
  router.get('/',authMiddleware, CategoryController.getCategories)

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
  *             required:
  *               - nombre
  *               - descripcion
  *             properties:
  *               nombre:
  *                 type: string
  *                 example: "Bebidas"
  *                 description: "Nombre de la categoría (requerido, 1-100 caracteres)"
  *               descripcion:
  *                 type: string
  *                 example: "Productos líquidos y refrescos"
  *                 description: "Descripción de la categoría (requerido, 1-255 caracteres)"
   *     responses:
   *       201:
   *         description: Categoría creada
   *       400:
   *         description: Datos inválidos
   */
  router.post('/',authMiddleware, ValidateBody, CategoryController.createCategory)

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
  *             required:
  *               - nombre
  *               - descripcion
  *             properties:
  *               nombre:
  *                 type: string
  *                 example: "Bebidas"
  *                 description: "Nombre de la categoría (requerido, 1-100 caracteres)"
  *               descripcion:
  *                 type: string
  *                 example: "Productos líquidos y refrescos"
  *                 description: "Descripción de la categoría (requerido, 1-255 caracteres)"
   *     responses:
   *       200:
   *         description: Categoría actualizada
   *       400:
   *         description: Datos inválidos
   *       404:
   *         description: Categoría no encontrada
   */
  router.patch('/:id', authMiddleware, ValidateUpdateBody, CategoryController.updateCategory)


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
  router.delete('/:id',authMiddleware, CategoryController.deleteCategory)

  return router
}

export default createCategoryRouter

import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { validateProductInput } from "../middlewares/products/products.middleware.js"

const createProductsRouter = ({ ProductsController }) => {
  const router = Router()

  /**
   * @swagger
   * /productos:
   *   get:
   *     summary: Obtener todos los productos
   *     tags: [Productos]
   *     security:
   *       - bearerAuth: []
   *     responses:
   *       200:
   *         description: Lista de productos
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Producto'
   */
  router.get('/', authMiddleware, (req, res) => ProductsController.getProducts(req, res))

  /**
   * @swagger
   * /productos:
   *   post:
   *     summary: Crear un nuevo producto
   *     tags: [Productos]
   *     security:
   *       - bearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ProductoInput'
   *           example:
   *             nombre: "Producto ejemplo"
   *             descripcion: "Descripción opcional"
   *             precio: 100.50
   *             stock: 10
   *             categoria_id: "uuid-categoria"
   *     responses:
   *       201:
   *         description: Producto creado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Producto'
   *       400:
   *         description: Datos inválidos
   */
  router.post('/', authMiddleware, validateProductInput, (req, res) => ProductsController.createProduct(req, res))

  /**
   * @swagger
   * /productos/{id}:
   *   patch:
   *     summary: Actualizar un producto
   *     tags: [Productos]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID del producto a actualizar
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/ProductoInput'
   *           example:
   *             nombre: "Producto actualizado"
   *             descripcion: "Nueva descripción"
   *             precio: 120.00
   *             stock: 5
   *             categoria_id: "uuid-categoria"
   *     responses:
   *       200:
   *         description: Producto actualizado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Producto'
   *       400:
   *         description: Datos inválidos
   *       404:
   *         description: Producto no encontrado
   */
  router.patch('/:id', validateProductInput, authMiddleware, (req, res) => ProductsController.updateProduct(req, res))

  /**
   * @swagger
   * /productos/{id}:
   *   delete:
   *     summary: Eliminar un producto
   *     tags: [Productos]
   *     security:
   *       - bearerAuth: []
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID del producto a eliminar
   *         schema:
   *           type: string
   *     responses:
   *       204:
   *         description: Producto eliminado correctamente (sin contenido)
   *       404:
   *         description: Producto no encontrado
   */
  router.delete('/:id', authMiddleware, (req, res) => ProductsController.deleteProduct(req, res))

  return router
}

export default createProductsRouter

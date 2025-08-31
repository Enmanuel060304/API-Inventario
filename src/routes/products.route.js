import { Router } from "express"

const createProductsRouter = ({ ProductsController }) => {
  const router = Router()

  /**
   * @swagger
   * /productos:
   *   get:
   *     summary: Obtener todos los productos
   *     tags: [Productos]
   *     responses:
   *       200:
   *         description: Lista de productos
   */
  router.get('/', (req, res) => ProductsController.getProducts(req, res))

  /**
   * @swagger
   * /productos:
   *   post:
   *     summary: Crear un nuevo producto
   *     tags: [Productos]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               nombre:
   *                 type: string
   *               precio:
   *                 type: number
   *               categoriaId:
   *                 type: string
   *     responses:
   *       201:
   *         description: Producto creado
   *       400:
   *         description: Datos inválidos
   */
  router.post('/', (req, res) => ProductsController.createProduct(req, res))

  /**
   * @swagger
   * /productos/{id}:
   *   patch:
   *     summary: Actualizar un producto
   *     tags: [Productos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               nombre:
   *                 type: string
   *               precio:
   *                 type: number
   *               categoriaId:
   *                 type: string
   *     responses:
   *       200:
   *         description: Producto actualizado
   *       400:
   *         description: Datos inválidos
   *       404:
   *         description: Producto no encontrado
   */
  router.patch('/:id', (req, res) => ProductsController.updateProduct(req, res))

  /**
   * @swagger
   * /productos/{id}:
   *   delete:
   *     summary: Eliminar un producto
   *     tags: [Productos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Producto eliminado
   *       404:
   *         description: Producto no encontrado
   */
  router.delete('/:id', (req, res) => ProductsController.deleteProduct(req, res))

  return router
}

export default createProductsRouter

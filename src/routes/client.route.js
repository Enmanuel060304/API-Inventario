/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: API para la gestión de clientes
 */

/**
 * @swagger
 * /clients:
 *   get:
 *     summary: Obtiene la lista de clientes
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Lista de clientes obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Client'
 *   post:
 *     summary: Crea un nuevo cliente
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       201:
 *         description: Cliente creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       400:
 *         description: Datos inválidos
 *
 * /clients/{id}:
 *   get:
 *     summary: Obtiene un cliente por ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       200:
 *         description: Cliente obtenido exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       404:
 *         description: Cliente no encontrado
 *   put:
 *     summary: Actualiza un cliente por ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Client'
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Cliente no encontrado
 *   delete:
 *     summary: Elimina un cliente por ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del cliente
 *     responses:
 *       204:
 *         description: Cliente eliminado exitosamente
 *       404:
 *         description: Cliente no encontrado
 */
import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { validateClientBody } from "../middlewares/client/validatebody.middleware.js";

export const createRouter = ({ ClienteController }) => {
  const router = Router();

  router.post("/", authMiddleware, validateClientBody, ClienteController.createClient);

  router.get("/", authMiddleware, ClienteController.getAllClients);

  router.get("/:id", authMiddleware,  ClienteController.getClientById);

  router.patch("/:id", authMiddleware, validateClientBody, ClienteController.updateClient);

  router.delete("/:id", authMiddleware, ClienteController.deleteClient);

  return router;
}
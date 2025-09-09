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
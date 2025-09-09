import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const createRouter = ({ ClienteController }) => {
  const router = Router();

  router.post("/", authMiddleware, ClienteController.createClient);

  router.get("/", authMiddleware, ClienteController.getAllClients);

  router.get("/:id", authMiddleware,  ClienteController.getClientById);

  router.put("/:id", authMiddleware, ClienteController.updateClient);

  router.delete("/:id", authMiddleware, ClienteController.deleteClient);

  return router;
}
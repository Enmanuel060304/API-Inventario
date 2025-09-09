import { Router } from "express";

export const createRouter = ({ ClienteController }) => {
  const router = Router();

  router.post("/", ClienteController.createClient);

  router.get("/", ClienteController.getAllClients);

  router.get("/:id", ClienteController.getClientById);

  router.put("/:id", ClienteController.updateClient);

  router.delete("/:id", ClienteController.deleteClient);

  router.delete("/:id", ClienteController.deleteClient);

  return router;
}
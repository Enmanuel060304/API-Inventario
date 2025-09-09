import { ClienteRepository } from "../../repositories/client.repository.js";
import { ClienteService } from "../../services/client.service.js";
import { ClienteController } from "../../controllers/client.controller.js";
import { createRouter } from "../../routes/client.route.js";

const clienteRepository = new ClienteRepository();
const clienteService = new ClienteService({ ClienteRepository: clienteRepository });
const clienteController = new ClienteController({ ClienteService: clienteService });
const clientesRouter = createRouter({ ClienteController: clienteController });

export default clientesRouter;
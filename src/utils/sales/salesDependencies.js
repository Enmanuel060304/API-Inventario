import createRouter from '../../routes/ventas.route.js';
import { VentasController } from '../../controllers/sales.controller.js';
import { VentasService } from '../../services/sales.service.js';
import { VentasRepository } from '../../repositories/sales.repository.js';

const ventasRepository = new VentasRepository();
const ventasService = new VentasService({ VentasRepository: ventasRepository });
const ventasController = new VentasController({ VentasService: ventasService });

export const ventasRouter = createRouter({  VentasController: ventasController });
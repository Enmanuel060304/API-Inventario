export class VentasService {
  constructor({ VentasRepository }) {
    this.VentasRepository = VentasRepository
  }

  getAllVentas = async () => await this.VentasRepository.findAll()

  createVenta = async (ventaData) => {
    return await this.VentasRepository.create(ventaData)
  }

  getVentaById = async (id) => await this.VentasRepository.findById(id)

  updateVenta = async (id, ventaData) => await this.VentasRepository.update(id, ventaData)

  deleteVenta = async (id) => await this.VentasRepository.delete(id)
}
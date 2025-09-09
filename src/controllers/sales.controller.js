export class VentasController {
  constructor({ VentasService }) {
    this.VentasService = VentasService
  }

  getVentas = async (req, res) => {
    try {
      const ventas = await this.VentasService.getAllVentas()
      res.status(200).json(ventas)
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener las ventas', error: error.message })
    }
  }

  createVenta = async (req, res) => {
    try {
      const nuevaVenta = await this.VentasService.createVenta(req.body)
      res.status(201).json(nuevaVenta)
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la venta', error: error.message })
    }
  }

  getVentaById = async (req, res) => {
    try {
      const venta = await this.VentasService.getVentaById(req.params.id)
      if (venta) {
        res.status(200).json(venta)
      } else {
        res.status(404).json({ message: 'Venta no encontrada' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener la venta', error: error.message })
    } 
  }

  updateVenta = async (req, res) => {
    try {
      const ventaActualizada = await this.VentasService.updateVenta(req.params.id, req.body)
      if (ventaActualizada) {
        res.status(200).json(ventaActualizada)
      } else {
        res.status(404).json({ message: 'Venta no encontrada' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar la venta', error: error.message })
    }
  }

  deleteVenta = async (req, res) => {
    try {
      const ventaEliminada = await this.VentasService.deleteVenta(req.params.id)
      if (ventaEliminada) {
        res.status(200).json({ message: 'Venta eliminada con éxito' })
      } else {
        res.status(404).json({ message: 'Venta no encontrada' })
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar la venta', error: error.message })
    }
  }
}
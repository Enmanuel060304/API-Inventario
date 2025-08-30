import Categoria from './categorias.model.js'
import Producto from './productos.model.js'
import Movimientos from './movimientos.model.js'
import Usuario from './usuarios.model.js'
import Cliente from './cliente.model.js'
import Venta from './venta.model.js'
import sequelize from '../../utils/mssql.config.js'
import Proveedor from './proveedor.model.js'
import DetalleVentas from './detallesVenta.model.js'
import Compra from './compra.model.js'
import DetalleCompra from './detallesCompra.model.js'

Categoria.hasMany(Producto, {
  foreignKey: 'categoria_id'
})
Producto.belongsTo(Categoria, {
  foreignKey: 'categoria_id'
})

Movimientos.belongsTo(Producto, {
  foreignKey: 'producto_id'
})
Producto.hasMany(Movimientos, {
  foreignKey: 'producto_id'
})

Movimientos.belongsTo(Usuario, {
  foreignKey: 'usuario_id'
})
Usuario.hasMany(Movimientos, {
  foreignKey: 'usuario_id'
});

Cliente.hasMany(Venta, {
  foreignKey: 'clienteId'
});

Venta.belongsTo(Cliente, {
  foreignKey: 'clienteId'
});

Venta.hasMany(DetalleVentas, {
  foreignKey: 'ventaId'
});

DetalleVentas.belongsTo(Venta, {
  foreignKey: 'ventaId'
});

Proveedor.hasMany(Compra, {
  foreignKey: 'proveedorId'
});

Compra.belongsTo(Proveedor, {
  foreignKey: 'proveedorId'
});

Producto.hasMany(DetalleCompra, {
  foreignKey: 'productoId'
});

DetalleCompra.belongsTo(Producto, {
  foreignKey: 'productoId'
});

Compra.hasMany(DetalleCompra, {
  foreignKey: 'compraId'
});

DetalleCompra.belongsTo(Compra, {
  foreignKey: 'compraId'
});

(async () => {
  await sequelize.sync({ force: true })
  console.log('Base de datos sincronizada')
})()

export { 
  Categoria, 
  Producto, 
  Movimientos, 
  Usuario, 
  Cliente, 
  Venta, 
  DetalleVentas, 
  Proveedor, 
  Compra, 
  DetalleCompra 
}

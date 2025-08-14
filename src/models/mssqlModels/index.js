import { Categoria } from './categorias.model.js'
import { Producto } from './productos.model.js'
import { Movimientos } from './movimientos.model.js'
import { Usuario } from './usuarios.model.js'
import sequelize from '../../utils/mssql.config.js'

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

(async () => {
  await sequelize.sync({ force: true })
  console.log('Base de datos sincronizada')
})()

export { Categoria, Producto, Movimientos, Usuario }

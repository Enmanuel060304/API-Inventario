import { Sequelize } from 'sequelize'
import { DataTypes } from 'sequelize'
import sequelize from '../../utils/mssql.config.js'

const DetalleVentas = sequelize.define('DetalleVenta', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  ventaId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'ventas',
      key: 'id'
    }
  },
  productoId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'productos',
      key: 'id'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'detalle_ventas',
  schema: 'dbo',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
})

export default DetalleVentas
import sequelize from '../../utils/mssql.config.js'
import { DataTypes } from 'sequelize'

const Venta = sequelize.define('ventas', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  usuarioId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  clienteId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: 'clientes',
      key: 'id'
    }
  },
  estado: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'BORRADOR',
    validate: {
      isIn: [['BORRADOR', 'COMPLETADO', 'ANULADA']]
    }
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true,
    defaultValue: 0.00,
    validate: {
      min: 0
    }
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
  },
}, {
  tableName: 'ventas',
  schema: 'dbo',
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
})

export default Venta
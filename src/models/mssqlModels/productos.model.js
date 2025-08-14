import sequelize from '../../utils/mssql.config.js'
import { DataTypes } from 'sequelize'
import { Categoria } from './categorias.model.js'

export const Producto = sequelize.define('producto', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  categoria_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'id'
    }
  }
}, {
  tableName: 'productos',
  timestamps: false,
  schema: 'dbo'
}
)

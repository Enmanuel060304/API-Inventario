import sequelize from '../../utils/mssql.config.js'
import { DataTypes } from 'sequelize'
import Producto from './productos.model.js'
import Usuario from './usuarios.model.js'

const Movimientos = sequelize.define('movimientos', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  producto_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Producto,
      key: 'id'
    }
  },
  tipo: {
    type: DataTypes.ENUM('entrada', 'salida'),
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  nota: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'movimientos',
  timestamps: false,
  schema: 'dbo'
}
)

export default Movimientos

import sequelize from '../../utils/mssql.config.js'
import { DataTypes } from 'sequelize'

const Categoria = sequelize.define('categorias', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'categorias',
  timestamps: false,
  schema: 'dbo'
})

export default Categoria
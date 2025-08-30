import sequelize from '../../utils/mssql.config.js'
import { DataTypes } from 'sequelize'

const Cliente = sequelize.define('clientes', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  fullName: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING(50),
    allowNull: true,
    unique: true
  }
}, {
  tableName: 'clientes',
  timestamps: false,
  schema: 'dbo'
})

export default Cliente

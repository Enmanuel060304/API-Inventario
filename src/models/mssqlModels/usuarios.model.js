import sequelize from '../../utils/mssql.config.js'
import { DataTypes } from 'sequelize'

const Usuario = sequelize.define('usuarios', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true
  },
  passwordHash: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  timestamps: false,
  schema: 'dbo'
})

export {
  Usuario
}

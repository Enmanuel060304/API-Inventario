import { email } from 'zod'
import sequelize from '../../utils/mssql.config.js'
import { DataTypes } from 'sequelize'

const Proveedor = sequelize.define('proveedores', {
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
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'proveedores',
  timestamps: false,
  schema: 'dbo'
})

export default Proveedor

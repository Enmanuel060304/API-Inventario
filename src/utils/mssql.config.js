import { Sequelize } from 'sequelize'
import { DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST } from './config.js'
// conectar a la base de datos
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mssql',
  logging: false,
  port: DB_PORT
})
export default sequelize

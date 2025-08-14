import { Sequelize } from 'sequelize'

// conectar a la base de datos
const sequelize = new Sequelize('InventarioLupita', 'sa', 'MiClaveSegura123', {
  host: 'localhost',
  dialect: 'mssql',
  logging: false,
  port: 1435
})
export default sequelize

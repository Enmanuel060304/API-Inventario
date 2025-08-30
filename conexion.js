// import sql from 'mssql'
import { Sequelize } from 'sequelize'

// conectar a la base de datos
const sequelize = new Sequelize('InventarioLupita', 'sa', 'MiClaveSegura123', {
  host: 'localhost',
  dialect: 'mssql',
  logging: false,
  port: 1435
})

// probar la conexión

sequelize.authenticate()
  .then(async () => {
    console.log('Conexión establecida con éxito.')
    // Consulta de prueba: obtener la fecha actual del servidor SQL
    const [results] = await sequelize.query('SELECT * FROM usuarios')
    console.log('Resultados de la consulta a la tabla usuarios:', results)
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err)
  })

// consulta de prueba

// const config = {
//   user: 'sa',
//   password: 'MiClaveSegura123',
//   server: 'localhost',
//   port: 1435,
//   database: 'master',
//   options: {
//     encrypt: false,
//     trustServerCertificate: true
//   }
// }

// const connection = async () => {
//   try {
//     const pool = await sql.connect(config)
//     const response = await pool.request().query('SELECT GETDATE()')
//     console.log('conectado')
//     console.log(response)
//   } catch (error) {
//     console.error(error)
//   }
// }

// connection()

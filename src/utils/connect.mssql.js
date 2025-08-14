import conexion from './mssql.config.js'

export const conectarSQL = async () => {
  try {
    await conexion.authenticate()
    console.log('Conexión con SQL server establecida con éxito.')
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error)
  }
}

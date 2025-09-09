import express from 'express'
import { unknownEndPoint } from './src/middlewares/unknownRoute.js'
import { conectarSQL } from './src/utils/connect.mssql.js'
import { authRouter } from './src/utils/authDependencies.js'
import categoryRouter from './src/utils/category/categoryDependencies.js'
import productRouter from './src/utils/product/productDependecy.js'
import providerRouter from './src/utils/provider/providerDependecy.js'
import { ventasRouter } from './src/utils/sales/salesDependencies.js'
import clientesRouter from './src/utils/client/client.dependecies.js'

import { PORT } from './src/utils/config.js'
import cookieParser from 'cookie-parser'
import { swaggerDocs } from './src/utils/swagger.js'

const app = express()
conectarSQL()

app.disable('x-powered-by') // !cabezera desactivada por seguridad
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/categorias', categoryRouter)
app.use('/api/clientes', clientesRouter)
app.use('/api/ventas', ventasRouter)
app.use('/api/productos', productRouter)
app.use('/api/proveedores', providerRouter)
// app.use('/api/movimientos', movementRouter)


swaggerDocs(app)
app.use(unknownEndPoint)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log(`swagger documentation on http://localhost:${PORT}/api/docs`)
})

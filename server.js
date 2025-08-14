import express from 'express'
import { unknownEndPoint } from './src/middlewares/unknownRoute.js'
import { conectarSQL } from './src/utils/connect.mssql.js'
import { userRouter } from './src/utils/authDependencies.js'

import { PORT } from './src/utils/config.js'
import cookieParser from 'cookie-parser'

const app = express()
conectarSQL()

app.disable('x-powered-by') // !cabezera desactivada por seguridad
app.use(express.json())
app.use(cookieParser())

app.use('/api/user', userRouter)

app.use(unknownEndPoint)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

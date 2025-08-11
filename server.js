import express from 'express'
import { userRouter } from './src/routes/user.route.js'
import { unknownEndPoint } from './src/middlewares/unknownRoute.js'

const app = express()

app.use('/api/user',userRouter)

app.use(express.json())



app.use(unknownEndPoint)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
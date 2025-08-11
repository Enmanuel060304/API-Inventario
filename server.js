import express from 'express'
import { unknownEndPoint } from './src/middlewares/unknownRoute.js'
import { connectMongoDB } from './src/utils/connect.mongo.js'

import { UserRepository } from './src/repositories/userRepository.js'
import { UserService } from './src/services/user.service.js'
import { UserController } from './src/controllers/user.controller.js'
import { createRouter } from './src/routes/user.route.js'
import { PORT, MONGO_URL } from './src/utils/config.js'

const userRepository = new UserRepository()
const userService = new UserService({ UserRepository: userRepository })
const userController = new UserController({ UserService: userService })
const userRouter = createRouter({ UserController: userController })

const app = express()
connectMongoDB(MONGO_URL)
app.use(express.json())

app.use('/api/user', userRouter)

app.use(unknownEndPoint)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

import { UserRepository } from '../repositories/userRepository.js'
import { UserService } from '../services/user.service.js'
import { UserController } from '../controllers/user.controller.js'
import { createRouter } from '../routes/user.route.js'

const userRepository = new UserRepository()
const userService = new UserService({ UserRepository: userRepository })
const userController = new UserController({ UserService: userService })
const userRouter = createRouter({ UserController: userController })

export { userRouter }

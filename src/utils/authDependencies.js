import { UserRepository } from '../repositories/authRepository.js'
import { UserService } from '../services/auth.service.js'
import { UserController } from '../controllers/auth.controller.js'
import { createRouter } from '../routes/auth.route.js'

const userRepository = new UserRepository()
const userService = new UserService({ UserRepository: userRepository })
const userController = new UserController({ UserService: userService })
const authRouter = createRouter({ UserController: userController })

export { authRouter }

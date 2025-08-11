export class UserController {
  constructor ({ UserService }) {
    this.UserService = UserService
  }

  registerUser = async (req, res) => {
    const response = await this.UserService.registerUser(req.body)
    res.send(response)
  }

  loginUser = (req, res) => {
    const response = this.UserService.loginUser(req.body)
    res.send(response)
  }
}

export class UserController {
  constructor ({ UserService }) {
    this.UserService = UserService
  }

  registerUser = (req, res) => {
    const response = this.UserService.registerUser(req.body)
    res.send(response)
  }

  loginUser = (req, res) => {
    const response = this.UserService.loginUser(req.body)
    res.send(response)
  }
}

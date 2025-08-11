export class UserController {
  constructor ({ UserService }) {
    this.UserService = UserService
  }

  registerUser = async (req, res) => {
    try {
      const response = await this.UserService.registerUser(req.body)
      res.send(response)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  loginUser = (req, res) => {
    const response = this.UserService.loginUser(req.body)
    res.json({ messgae: response })
  }
}

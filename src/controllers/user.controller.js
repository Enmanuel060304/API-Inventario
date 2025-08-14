export class UserController {
  constructor ({ UserService }) {
    this.UserService = UserService
  }

  registerUser = async (req, res) => {
    try {
      const response = await this.UserService.registerUser(req.body)
      res.status(201).send(response)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  loginUser = async (req, res) => {
    try {
      const response = await this.UserService.loginUser(req.body)
      res.cookie('token', response, {
        httpOnly: true,
        secure: false
      })
      res.json({ message: 'login exitoso ', response })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  logoutUser = (req, res) => {
    res
      .clearCookie('token', {
        httpOnly: true
      })
      .json({ message: 'session cerrada' })
  }
}

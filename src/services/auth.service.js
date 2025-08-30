export class UserService {
  constructor ({ UserRepository }) {
    this.UserRepository = UserRepository
  }

  registerUser = async (data) => {
    const newData = await this.UserRepository.registerUser(data)
    return newData
  }

  loginUser = async data => await this.UserRepository.loginUser(data)
}

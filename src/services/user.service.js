export class UserService {
  constructor ({ UserRepository }) {
    this.UserRepository = UserRepository
  }

  registerUser = (data) => {
    console.log('service data:', data)
    const newData = this.UserRepository.registerUser(data)

    return newData
  }

  loginUser = data => this.UserRepository.loginUser(data)
}

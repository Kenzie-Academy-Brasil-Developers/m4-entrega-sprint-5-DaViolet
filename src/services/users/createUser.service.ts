import { IUserRequest, IUserResponse } from '../../interfaces/users'
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { userWithoutPasswordSerializer } from '../../serializers/user.serializers'
import { AppError } from '../../errors/AppError'

const createUserService = async(userData: IUserRequest): Promise<IUserResponse> => {
    
    const userRepository = AppDataSource.getRepository(User)

    const foundUser = await userRepository.findOne({
        where: {
          email: userData.email
        }
  })
  
  if(foundUser) {
        throw new AppError('User already exist.', 409)
  } else {
    const createdUser = userRepository.create(userData)
    await userRepository.save(createdUser)

    const userWithoutPassword = await userWithoutPasswordSerializer.validate(createdUser, {
        stripUnknown: true
    })
    return userWithoutPassword
}
}

export default createUserService
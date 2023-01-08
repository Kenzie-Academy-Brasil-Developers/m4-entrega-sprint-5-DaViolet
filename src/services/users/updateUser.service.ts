import { IUserResponse, IUserUpdateRequest } from '../../interfaces/users'
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../errors/AppError'
import { userUpdateSerializer, userWithoutPasswordSerializer } from '../../serializers/user.serializers'

const updateUserService = async (userData: IUserUpdateRequest, userId: string): Promise<IUserResponse> => {

    const userRepository = AppDataSource.getRepository(User)

    const foundUser = await userRepository.findOneBy({
        id: userId
    })

    if (!foundUser) {
        throw new AppError("User not found", 404);
      }

    if (userData.hasOwnProperty('isAdm') || userData.hasOwnProperty('isActive') || userData.hasOwnProperty('id')){
        throw new AppError("Invalid data", 401);
    }

    const updatedUserWithoutExtraData = await userUpdateSerializer.validate(userData, {
        stripUnknown: true,
    })

    const updatedUser = userRepository.create({
        ...foundUser,
        ...updatedUserWithoutExtraData,
    })
    await userRepository.save(updatedUser)

    return updatedUser; 

}

export default updateUserService
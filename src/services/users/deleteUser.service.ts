import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/AppError"

const deleteUserService = async (userId:string) => {

    const userRepository = AppDataSource.getRepository(User)
    const foundUser = await userRepository.findOneBy({id:userId})

    if (!foundUser) {
        throw new AppError("User not found", 404);
      }
    
    if (!foundUser.isActive) {
      throw new AppError("User is already inactive");
    }

    foundUser.isActive = false
    await userRepository.save(foundUser)
    return {}
}

export default deleteUserService
import { IUserResponse } from './../../interfaces/users/index';
import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { userWithoutPasswordSerializerArray } from '../../serializers/user.serializers';

const listUsersService = async (): Promise<IUserResponse[]> => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find();

  const usersWithoutPassword = userWithoutPasswordSerializerArray.validate(users, {
    stripUnknown: true,
  });

  return usersWithoutPassword;
}  

export default listUsersService
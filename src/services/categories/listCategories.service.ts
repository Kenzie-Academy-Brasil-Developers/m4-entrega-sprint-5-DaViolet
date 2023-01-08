import AppDataSource from '../../data-source'
import Category from '../../entities/category.entities';
import { categorySerializerArray } from '../../serializers/category.serializer';
import { ICategoryRequest } from '../../interfaces/categories';
const listUsersService = async (): Promise<ICategoryRequest[]> => {

    const categoryRepository = AppDataSource.getRepository(Category)

    const categories = await categoryRepository.find();

  const categoriesValidated = categorySerializerArray.validate(categories, {
    stripUnknown: true,
  });

  return categoriesValidated;
}  

export default listUsersService
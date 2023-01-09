import AppDataSource from '../../data-source'
import Property from '../../entities/property.entities'
import Category from '../../entities/category.entities'

const listPropertiesFromCategories = async (categoryId: string) => {

    const propertyRepository = AppDataSource.getRepository(Property)

    const properties = await propertyRepository.createQueryBuilder('properties').
    innerJoinAndSelect('properties.categories', 'categories').
    where('properties.categoryId = :id_category', {id_category: categoryId}).
    select(['properties']).
    getRawMany()

    return properties

}

export default listPropertiesFromCategories
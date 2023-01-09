import { IPropertyRequest } from './../../interfaces/properties/index';
import AppDataSource from "../../data-source";
import Category from "../../entities/category.entities";
import Property from "../../entities/property.entities";
import { AppError } from "../../errors/AppError";
import { createAddressService } from '../addresses/createAddress.service';
import { userUpdateSerializer } from '../../serializers/user.serializers';

const createPropertyService = async (propertyData: IPropertyRequest) => {

const propertyRepository = AppDataSource.getRepository(Property)
const categoryRepository = AppDataSource.getRepository(Category)

const foundCategory = await categoryRepository.findOneBy({
    id: propertyData.categoryId,
  });

  if (!foundCategory) {
    throw new AppError("Category do not exists", 404);
  } else {
  const address = await createAddressService(propertyData.address)

  const createdProperty = propertyRepository.create({
    ...propertyData,
    address,
  });

  await propertyRepository.save(createdProperty);

  const propertyResponse = {
    id: createdProperty.id,
    value: createdProperty.value,
    sold: createdProperty.sold,
    size: createdProperty.size,
    category: foundCategory,
    createdAt: createdProperty.createdAt,
    updatedAt: createdProperty.updatedAt,
    address: createdProperty.address
};

  return propertyResponse;
}

}

export default createPropertyService;
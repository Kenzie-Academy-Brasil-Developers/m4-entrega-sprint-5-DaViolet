import AppDataSource from "../../data-source";
import Property from "../../entities/property.entities";

export const listAllPropertiesService = async () => {
  const propertyRepository = AppDataSource.getRepository(Property);

  const foundProperties = await propertyRepository.find();

  return foundProperties;
};

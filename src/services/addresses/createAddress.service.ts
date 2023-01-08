import AppDataSource from "../../data-source";
import Address from "../../entities/address.entities";
import { IAddressRequest } from "../../interfaces/properties";
import { AppError } from "../../errors/AppError";

export const createAddressService = async (addressData: IAddressRequest) => {
    const addressRepository = AppDataSource.getRepository(Address)

    const foundAddress = await addressRepository.findOneBy({
        district: addressData.district,
        number: addressData.number,
      });
      
      if (foundAddress) {
        throw new AppError("Adress already exists on some Property!", 409);
      }

    const createdAddress = addressRepository.create(addressData)
    
    await addressRepository.save(createdAddress)

    return createdAddress
}
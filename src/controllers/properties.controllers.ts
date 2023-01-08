import { IPropertyRequest } from './../interfaces/properties/index';
import { Request, Response } from 'express'
import createPropertyService from '../services/properties/createProperty.service';

const createPropertyController = async (req: Request, res: Response) => {
    const propertyData: IPropertyRequest = req.body
    const newProperty = await createPropertyService(propertyData)
    return res.status(201).json(newProperty)
}

export { createPropertyController }
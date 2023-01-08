import { Request, Response } from 'express'
import { ICategoryRequest } from '../interfaces/categories'
import createCategoryService from '../services/categories/createCategory.service'

const createCategoryController = async (req: Request, res: Response) => {
    const categoryData: ICategoryRequest = req.body
    const newCategory = await createCategoryService(categoryData)
    return res.status(201).json(newCategory)
}

export { createCategoryController }
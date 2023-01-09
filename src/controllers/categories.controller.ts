import { Request, Response } from 'express'
import { ICategoryRequest } from '../interfaces/categories'
import createCategoryService from '../services/categories/createCategory.service'
import listCategoriesService from '../services/categories/listCategories.service'
import listPropertiesFromCategories from '../services/categories/listPropertiesFromCategory.service'

const createCategoryController = async (req: Request, res: Response) => {
    const categoryData: ICategoryRequest = req.body
    const newCategory = await createCategoryService(categoryData)
    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req: Request, res: Response) => {
    const categories = await listCategoriesService()
    return res.status(200).json(categories)
}

const listPropertiesFromCategoryController = async (req: Request, res: Response) => {
    const categoryId: string = req.params.id
    const properties = await listPropertiesFromCategories(categoryId)
    return res.json(properties)
}

export { createCategoryController, listCategoriesController, listPropertiesFromCategoryController }
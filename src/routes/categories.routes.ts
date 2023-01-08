import { Router } from 'express'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import { categorySerializer } from '../serializers/category.serializer'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { createCategoryController } from '../controllers/categories.controller.controller'


const categoryRoutes = Router()

categoryRoutes.post('', ensureAuthMiddleware, ensureIsAdmMiddleware, ensureDataIsValidMiddleware(categorySerializer), createCategoryController)

export default categoryRoutes
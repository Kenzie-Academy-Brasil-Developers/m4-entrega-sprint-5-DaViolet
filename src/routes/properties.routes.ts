import { Router } from 'express'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import { createPropertyController } from '../controllers/properties.controllers'

const propertyRoutes = Router()

propertyRoutes.post('', ensureAuthMiddleware, ensureIsAdmMiddleware, createPropertyController)

export default propertyRoutes
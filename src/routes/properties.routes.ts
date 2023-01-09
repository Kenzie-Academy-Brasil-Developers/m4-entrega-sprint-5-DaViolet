import { Router } from 'express'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import { createPropertyController } from '../controllers/properties.controllers'
import { listAllPropertiesController } from '../controllers/properties.controllers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import propertySerializer from '../serializers/property.serializer'

const propertyRoutes = Router()

propertyRoutes.post('', ensureDataIsValidMiddleware(propertySerializer), ensureAuthMiddleware, ensureIsAdmMiddleware, createPropertyController)

propertyRoutes.get('', listAllPropertiesController)

export default propertyRoutes
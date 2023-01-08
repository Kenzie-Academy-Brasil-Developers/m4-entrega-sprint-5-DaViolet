import { Router } from 'express'
import { createUserController } from '../controllers/users.controllers'
import ensureAuthMiddleware from '../middlewares/ensureAuth.middleware'
import ensureIsAdmMiddleware from '../middlewares/ensureIsAdm.middleware'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { userSerializer, userUpdateSerializer } from '../serializers/user.serializers'
import { listUsersController } from '../controllers/users.controllers'
import { deleteUserController } from '../controllers/users.controllers'
import { updateUserController } from '../controllers/users.controllers'

const userRoutes = Router()

userRoutes.post('', ensureDataIsValidMiddleware(userSerializer), createUserController)
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listUsersController)
userRoutes.patch('/:id', ensureDataIsValidMiddleware(userUpdateSerializer), ensureAuthMiddleware, ensureIsAdmMiddleware, updateUserController)
userRoutes.delete('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, deleteUserController)

export default userRoutes
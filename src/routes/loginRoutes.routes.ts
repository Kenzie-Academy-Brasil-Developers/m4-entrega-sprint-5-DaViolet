import { Router } from 'express'
import { userLoginSerializer } from '../serializers/user.serializers'
import ensureDataIsValidMiddleware from '../middlewares/ensureDataIsValid.middleware'
import { loginUserController } from '../controllers/login.controlller'

const loginRoutes = Router()

loginRoutes.post('', ensureDataIsValidMiddleware(userLoginSerializer), loginUserController)

export default loginRoutes
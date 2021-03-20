import { Router } from 'express'

import User from './Controllers/user.controller'

const userController: User = new User

const routes = Router()

routes.get('/', userController.index)

export default routes

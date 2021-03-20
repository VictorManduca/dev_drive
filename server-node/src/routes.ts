import { Router } from 'express'

import UserController from './Controllers/user.controller'

const userController: UserController = new UserController

const routes = Router()

routes.get('/user', userController.index)
routes.post('/user', userController.create)

export default routes

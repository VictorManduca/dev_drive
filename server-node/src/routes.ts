import { Router } from 'express'

import AuthMiddleware from './Middlewares/auth.middleware'

import UserController from './Controllers/user.controller'

const authMiddleware: AuthMiddleware = new AuthMiddleware()

const userController: UserController = new UserController

const routes = Router()

routes.post('/user/login', userController.login)
routes.get('/user', authMiddleware.verifyJwt, userController.index)
routes.post('/user', authMiddleware.verifyJwt, userController.create)

export default routes

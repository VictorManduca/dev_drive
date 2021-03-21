import { Request, Response } from 'express'

import { encryptPassword } from '../Shared/crypto.shared'
import { created, ok, badRequest, unauthorized, emptyOk } from '../Shared/response.shared'
import { User } from '../models/entities/User'
import AuthMiddleware from '../Middlewares/auth.middleware'

export default class UserController {
	public async index(req: Request, res: Response) {
		try {
			const allUsers = await User.find()
			return ok(res, allUsers)
		} catch (error) {
			return badRequest(res, error)
		}
	}

	public async create(req: Request, res: Response) {
		try {
			const body = req.body
			const user: User = new User

			user.email = body.email
			user.name = body.name
			user.password = encryptPassword(body.password)
			await user.save()

			return created(res)
		} catch (error) {
			return badRequest(res, error)
		}
	}

	public async login(req: Request, res: Response) {
		try {
			const authService: AuthMiddleware = new AuthMiddleware()
			const { email, password } = req.body
			const user: User | undefined = await User
				.findOne({ email: email, password: encryptPassword(password) })

			if (!user) {
				return unauthorized(res)
			} else {
				const token = authService.createToken(user)
				return ok(res, { token })
			}
		} catch (error) {
			console.error({ error })
			return badRequest(res, error)
		}
	}
}

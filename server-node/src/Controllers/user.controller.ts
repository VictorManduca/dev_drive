import { Request, Response } from 'express'

import { encryptPassword } from '../Shared/crypto.shared'
import { created, ok, badRequest } from '../Shared/response.shared'
import { User } from '../models/entities/User'

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
}

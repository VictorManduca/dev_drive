import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import path from 'path'

import { unauthorized } from '../Shared/response.shared'
import { User } from '../models/entities/User'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

export default class AuthMiddleware {
	public verifyJwt(req: Request, res: Response, next: NextFunction) {
		const token = req.headers['authorization']
		const secret = `${process.env.SECRET}`

		if (!token) {
			return unauthorized(res)
		} else {
			try {
				jwt.verify(token, secret)
				return next()
			} catch (error) {
				console.error({ error })
				return unauthorized(res)
			}
		}
	}

	public createToken(user: User) {
		const secret = `${process.env.SECRET}`
		const jwtDuration = 3000

		const { id, name } = user
		return jwt.sign({ id, name }, secret, { expiresIn: jwtDuration })
	}
}

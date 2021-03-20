import { Request, Response } from 'express'

import { ok } from '../Shared/response.shared'

export default class User {
	public index(req: Request, res: Response) {
		return ok(res, { nome: 'Victor', password: 'pass' })
	}
}

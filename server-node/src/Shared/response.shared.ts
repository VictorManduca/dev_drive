import { Response } from 'express'

export function ok(res: Response, data: any) {
	return res.status(200).json({ data: data })
}

export function badRequest(res: Response, error: any) {
	return res.status(400).json({ error: error })
}

export function created(res: Response) {
	return res.status(201).send()
}

export function unauthorized(res: Response) {
	return res.status(401).send()
}

export function serverError(res: Response, error: any) {
	return res.status(500).json({ error: error })
}

export function emptyOk(res: Response) {
	return res.status(200).send()
}

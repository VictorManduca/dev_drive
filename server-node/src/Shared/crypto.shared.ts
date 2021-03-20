import crypto from 'crypto'

const secreat: string = '123456abc'

export function encryptPassword(password: string): string {
	return crypto.createHmac('sha256', secreat).update(password).digest('hex')
}

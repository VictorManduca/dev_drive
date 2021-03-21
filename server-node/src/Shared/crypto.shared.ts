import crypto from 'crypto'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const secret: string = `${process.env.SECRET}`
export function encryptPassword(password: string): string {
	return crypto.createHmac('sha256', secret).update(password).digest('hex')
}

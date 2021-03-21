import { User } from '../models/entities/User'

export async function alreadyExistUser(user: User) {
	try {
		const isUserExist = await User.findOne({ email: user.email })
		return isUserExist ? true : false
	} catch (error) {
		console.error({ error })
		return new Error(error)
	}
}

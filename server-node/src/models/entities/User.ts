import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'

import { File } from './File'
import { Folder } from './Folder'
import { Permission } from './Permission'

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@Column()
	name: string

	@Column()
	email: string

	@Column()
	password: string

	@OneToMany(() => Permission, permission => permission.user)
	permission: Permission[]

	@OneToMany(() => Folder, folder => folder.user)
	folder: Folder[]

	@OneToMany(() => File, file => file.user)
	file: File[]
}

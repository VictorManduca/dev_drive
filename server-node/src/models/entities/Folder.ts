import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm'

import { File } from './File'
import { User } from './User'

@Entity()
export class Folder extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => User, user => user.folder)
	user: User

	@OneToMany(() => File, file => file.folder)
	file: File

	@Column()
	name: string
}

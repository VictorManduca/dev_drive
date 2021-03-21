import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

import { Folder } from './Folder'
import { User } from './User'

@Entity()
export class File extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => User, user => user.file, { nullable: true })
	user: User

	@ManyToOne(() => Folder, folder => folder.file, { nullable: true })
	folder: Folder

	@Column()
	name: string

	@Column('longblob')
	fileBase64: string
}

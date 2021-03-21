import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Permission extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number

	@ManyToOne(() => User, user => user.permission)
	user: User

	@Column({ type: 'tinyint' })
	canCreateFile: boolean

	@Column({ type: 'tinyint' })
	canUpdateFile: boolean

	@Column({ type: 'tinyint' })
	canDeleteFile: boolean

	@Column({ type: 'tinyint' })
	canCreateFolder: boolean

	@Column({ type: 'tinyint' })
	canUpdateFolder: boolean

	@Column({ type: 'tinyint' })
	canDeleteFolder: boolean

	@Column({ type: 'tinyint' })
	canCreateGroup: boolean

	@Column({ type: 'tinyint' })
	canUpdateGroup: boolean

	@Column({ type: 'tinyint' })
	canDeleteGroup: boolean
}

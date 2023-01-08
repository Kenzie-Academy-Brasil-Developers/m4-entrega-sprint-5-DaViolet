import { 
    Entity,
    PrimaryGeneratedColumn,
    Column, ManyToOne
    } from
    'typeorm'
import { User } from './user.entity';
import Property from './property.entities';

@Entity('schedules_users_properties')
class SchedulesUsersProperties {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ type: 'date' })
    date: Date

    @Column({ type: 'time' })
	hour: Date

	@ManyToOne(() => Property)
	property: Property

	@ManyToOne(() => User)
	user: User

}

export default SchedulesUsersProperties
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import Address from "./address.entities";
import SchedulesUsersProperties from "./schedulesUsersProperties.entities";
import Category from "./category.entities";

@Entity("properties")
class Property {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ default: false })
	sold: boolean;

	@Column({ type: "decimal", precision: 10, scale: 2 })
	value: number;

	@Column({ type: "integer" })
	size: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => Address)
	@JoinColumn()
	address: Address;

	@ManyToOne(() => Category, (category) => category.property)
	@JoinColumn()
	category: Category;

	@OneToMany(() => SchedulesUsersProperties, (schedule) => schedule.property)
	schedule: SchedulesUsersProperties[];
}

export default Property;

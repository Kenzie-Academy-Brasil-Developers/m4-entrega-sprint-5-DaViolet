import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Property from "./property.entities";

@Entity("addresses")
class Address {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column()
	district: string

	@Column()
	zipCode: string

	@Column({nullable: true, unique: true})
	number: string

	@Column()
	city: string

	@Column()
	state: string;

	@OneToOne(() => Property, (property) => property.address)
	property: Property;
}

export default Address;

import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Country } from "../country/country.entity";
import { UserProfile } from "../user-profile/user-profile.entity";


@Entity({ name: "cities" })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:20 })
  name: string;

  @ManyToOne(() => Country, (country) => country.id)
  @JoinColumn({ name: "countryId"})
  countryId: Country;

  @OneToMany(() => UserProfile, (userProfile) => userProfile.city)
  userProfile: UserProfile[]
}
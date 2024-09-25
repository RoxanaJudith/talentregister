import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { City } from '../city/city.entity';

@Entity({ name: 'countries' })
export class Country {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @OneToMany(() => City, (city) => city.countryId)
  cities: City[];
}

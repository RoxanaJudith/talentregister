import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: "status" })
export class Status {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true,nullable: false})
  name: string;
  @OneToMany(() => User, (user) => user.status)
    users: User[]
}

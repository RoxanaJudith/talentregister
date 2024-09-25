import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: "roles" })
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50})
  name: string;

  @OneToMany(() => User, (user) => user.role)
    users: User[];
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from "../role/role.entity"
import { Status } from '../status/status.entity';
import {
  IsEmail,
  Matches,
  MinLength,
  MaxLength,
} from "class-validator"


@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",length:100 })
  @IsEmail()
  @MaxLength(100)
  email: string;

  @Column({ type: "varchar",length:50 })
  @MinLength(2)
  @MaxLength(50)
  firstName: string;

  @Column({ type: "varchar",length:50 })
  @MinLength(2)
  @MaxLength(50)
  lastName: string;

  @Column({ type: "varchar", length: 60, select:false })
  @Matches("^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(.{8,})$")
  password: string;

  @ManyToOne(() => Role, (role) => role.users, { eager:true, cascade: true })
  @JoinColumn({ name: "roleId"})
  role: Role;

  @ManyToOne(() => Status, (status) => status.users, { eager:true, cascade: true })
  @JoinColumn({ name: "statusId" })
  status: Status;
}


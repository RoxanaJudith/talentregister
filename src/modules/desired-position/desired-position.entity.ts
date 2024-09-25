import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserProfile } from '../user-profile/user-profile.entity';

@Entity({ name: "desired_positions" })
export class DesiredPosition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50 })
  name: string;

  @OneToMany(() => UserProfile, (userProfile) => userProfile.desiredPosition)
  userProfile: UserProfile[]
}

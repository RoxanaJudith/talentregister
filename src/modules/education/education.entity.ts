import { Column, Entity, ManyToOne , JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "../user-profile/user-profile.entity";

@Entity({ name: "educations" })
export class Education {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:100 })
  institution: string;

  @Column({ type: "varchar", length:100 })
  degree: string;

  @Column({ type: "varchar", length:100 })
  academicArea: string;

  @Column({ type: "date"})
  startDate: Date;

  @Column({ type: "date"})
  endDate: Date;

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.educations, { eager:true, cascade: true })
  @JoinColumn({ name: "userProfileId"})
    userProfile: UserProfile;

}
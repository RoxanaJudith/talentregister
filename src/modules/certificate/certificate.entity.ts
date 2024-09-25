import { Column, Entity, ManyToOne , JoinColumn , PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "../user-profile/user-profile.entity";

@Entity({ name: "certificates" })
export class Certificate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:100 })
  institution: string;

  @Column({ type: "varchar", length:100 })
  title: string;

  @Column({ type: "date"})
  issueDate: Date;

  @Column({ type: "varchar",length:100 })
  code: string;

  @Column({ type: "varchar",length:200})
  url: string;

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.certificates, { eager:true, cascade: true })
  @JoinColumn({ name: "userProfileId"})
    userProfile: UserProfile;

}
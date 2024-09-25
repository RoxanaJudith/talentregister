import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SoftSkill } from "../soft-skill/soft-skill.entity";
import { UserProfile } from "../user-profile/user-profile.entity";

@Entity({ name: "user_profile_soft_skills" })
export class UserProfileSoftSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SoftSkill, (softSkill) => softSkill.userSoftSkill)
  softSkill: SoftSkill

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.userSoftSkill)
  userProfile: UserProfile
}
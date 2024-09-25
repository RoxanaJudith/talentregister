import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Skills } from "../skill/skill.entity";
import { UserProfile } from "../user-profile/user-profile.entity";

export enum LevelSkill {
  NIVEL1 = "1",
  NIVEL2 = "2",
  NIVEL3 = "3",
}

@Entity({ name: "user_profile_skills" })
export class UserProfileSkills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: LevelSkill
  })
  levelSkill: LevelSkill

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.userProfileSkills)
  @JoinColumn({ name: "userProfileId"}) 
  userProfile: UserProfile

  @ManyToOne(() => Skills, (skill) => skill.userProfileSkills, { eager:true, cascade: true })
  @JoinColumn({ name: "skillId"}) 
  skill: Skills

}

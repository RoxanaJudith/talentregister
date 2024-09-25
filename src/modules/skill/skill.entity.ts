import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TypeSkills } from "../type-skill/type-skill.entity";
import { UserProfileSkills } from "../user-profile-skills/user-profile-skills.entity";

@Entity({ name: "skills" })
export class Skills {
  [x: string]: any;
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:100 })
  description: string;

  @ManyToOne(() => TypeSkills, (typeSkill) => typeSkill.skills)
  typeSkill: TypeSkills 

  @OneToMany(() => UserProfileSkills, (userProfileSkills) => userProfileSkills.skill)
  userProfileSkills: UserProfileSkills[]
}
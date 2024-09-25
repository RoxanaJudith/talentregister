import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserProfileSoftSkill } from "../user-profile-soft-skills/user-profile-soft-skill.entity";

@Entity({ name: "soft_skills" })
export class SoftSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:100 })
  name: string;

  @OneToMany(() => UserProfileSoftSkill, (userSoftSkill) => userSoftSkill.softSkill)
  userSoftSkill: UserProfileSoftSkill[]
}
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Skills } from "../skill/skill.entity";

@Entity({ name: "type_skills" })
export class TypeSkills {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:100 })
  name: string;

  @OneToMany(() => Skills, (skill) => skill.typeSkill)
  skills: Skills[]
  
}
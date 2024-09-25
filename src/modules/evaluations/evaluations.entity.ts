import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Skills } from '../skill/skill.entity';

@Entity({ name: 'evaluations' })
export class Evaluation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ManyToMany(() => Skills, (skill) => skill.evaluations)
  @JoinTable()
  skills: Skills[];

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  url: string;

  @Column({ type: 'boolean', default: false })
  state: boolean;
}

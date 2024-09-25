import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfileSoftSkill } from "../user-profile-soft-skills/user-profile-soft-skill.entity";
import { UserProfileSkills } from "../user-profile-skills/user-profile-skills.entity";
import { Education } from "../education/education.entity";
import { Certificate } from "../certificate/certificate.entity";
import { EmploymentStatus } from "../employment-status/employment-statuses.entity";
import { DesiredPosition } from "../desired-position/desired-position.entity";
import { City } from "../city/city.entity";
import { User } from "../user/user.entity";


export enum WorkMode {
  PRESENCIAL = "Presencial",
  REMOTO = "Remoto",
  HIBRIDO = "Hibrido",
}

export enum Availability {
  FT = "Full time",
  PT = "Partime",
  FL = "Freelancer",
}

export enum WorkVisa {
  EEUU = "Estados Unidos",
  UE = "Union Europea",
  PRA = "Pais de residencia actual",
  OP = "Otros Paises"
}

@Entity({ name: "user_profiles" })
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length:20 })
  gender: string;

  @Column({ type: "varchar", length:200 })
  urlCv: string;

  @Column({ type: "varchar", length:200 })
  urlLinkedin: string;

  @Column({ type: "varchar", length:200 })
  urlRepository: string;

  @Column({ type: "varchar", length:200 })
  urlPortfolio: string;

  @Column({ type: "varchar", length:20 })
  phoneNumber: string;

  @Column({ type: "int" })
  yearOfExperiences: number;

  @Column({
    type: "enum",
    enum: WorkMode,
    array: true
  })
  workMode: WorkMode[]

  @Column({
    type: "enum",
    enum: Availability,
    array: true
  })
  availability: Availability[]

  @Column({
    type: "enum",
    enum: WorkVisa,
    array: true
  })
  workVisa: WorkVisa[]

  @Column({ type: "varchar", length:100 })
  relocation: string;

  @Column({ type: "varchar", length:300 })
  idealJob: string;

  @Column({ type: "varchar", length:300 })
  proudExperience: string;

  @Column({ type: "int" })
  salaryExpectation: number;

  @OneToOne(() => User, { eager:true, cascade: true })
  @JoinColumn({ name: "userId" })
  userId: User

  @OneToMany(() => UserProfileSoftSkill, userSoftSkill => userSoftSkill.userProfile, { eager:true, cascade: true })
  userSoftSkill: UserProfileSoftSkill[]

  @OneToMany(() => UserProfileSkills, userProfileSkills => userProfileSkills.userProfile,  { eager:true, cascade: true })
  userProfileSkills: UserProfileSkills[];

  @OneToMany(() => Education, (education) => education.userProfile)
  educations: Education[];

  @OneToMany(() => Certificate, (certificate) => certificate.userProfile)
  certificates: Certificate[];

  @ManyToOne(() => EmploymentStatus, (employmentStatus) => employmentStatus.userProfile, { eager:true, cascade: true })
  @JoinColumn({ name: "employmentStatusId" })
  employmentStatus: EmploymentStatus;

  @ManyToOne(() => City, (city) => city.userProfile, { eager:true, cascade: true })
  @JoinColumn({ name: "cityId" })
  city: City;

  @ManyToOne(() => DesiredPosition, (desiredPosition) => desiredPosition.userProfile, { eager:true, cascade: true })
  @JoinColumn({ name: "desiredPositionId" })
  desiredPosition: DesiredPosition;
}
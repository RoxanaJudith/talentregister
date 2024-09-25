import { Type } from "class-transformer";
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNumber,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { LanguageLevel } from "../enums/language-level";
import { LevelSkill } from "../user-profile-skills/user-profile-skills.entity";
import { Availability, WorkMode, WorkVisa } from "./user-profile.entity";

export class SkillsDto {
  @IsEnum(LevelSkill)
  level: LevelSkill;

  @IsNumber({}, { message: "El campo skillId debe ser de tipo número" })
  id: number;
}

export class SoftSkillsDto {
  @IsNumber({}, { message: "El campo softSkillId debe ser de tipo número" })
  softSkillId: number;
}

export class CertificatesDto {
  @IsString({ message: "El campo institution debe ser de tipo cadena" })
  institution: string;

  @IsString({ message: "El campo title debe ser de tipo cadena" })
  title: string;

  @IsDateString()
  issueDate: Date;

  @IsString({ message: "El campo code debe ser de tipo cadena" })
  code: string;

  @IsString({ message: "El campo url debe ser de tipo cadena" })
  url: string;
}

export class EducationsDto {
  @IsString({ message: "El campo institution debe ser de tipo cadena" })
  institution: string;

  @IsString({ message: "El campo degree debe ser de tipo cadena" })
  degree: string;

  @IsString({ message: "El campo academicArea debe ser de tipo cadena" })
  academicArea: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate: Date;
}

export class LanguagesDto {
  @IsEnum(LanguageLevel)
  level: LanguageLevel;

  @IsNumber({}, { message: "El campo languagesId debe ser de tipo número" })
  languagesId: number;
}

export class CreateUserProfileDto {
  @IsString({ message: "El campo género debe ser de tipo cadena" })
  @MaxLength(20, { message: "El campo género no debe ser mayor a 20 caracteres" })
  gender: string;

  @IsString({ message: "El campo urlCv debe ser de tipo cadena" })
  @MaxLength(200)
  urlCv: string;

  @IsString({ message: "El campo urlLinkedin debe ser de tipo cadena" })
  @MaxLength(200)
  urlLinkedin: string;

  @IsString({ message: "El campo urlRepository debe ser de tipo cadena" })
  @MaxLength(200)
  urlRepository: string;

  @IsString({ message: "El campo urlPortfolio debe ser de tipo cadena" })
  @MaxLength(200)
  urlPortfolio: string;

  @IsString({ message: "El campo phoneNumber debe ser de tipo cadena" })
  @MaxLength(20)
  phoneNumber: string;

  @IsNumber()
  yearOfExperiences: number;

  @IsArray({ message: "El campo workMode debe ser de tipo array" })
  workMode: WorkMode[];

  @IsArray({ message: "El campo availability debe ser de tipo array" })
  availability: Availability[];

  @IsArray({ message: "El campo workVisa debe ser de tipo array" })
  workVisa: WorkVisa[];

  @IsString({ message: "El campo relocation debe ser de tipo cadena" })
  @MaxLength(100)
  relocation: string;

  @IsString({ message: "El campo idealJob debe ser de tipo cadena" })
  @MaxLength(300)
  idealJob: string;

  @IsString({ message: "El campo proudExperience debe ser de tipo cadena" })
  @MaxLength(300)
  proudExperience: string;

  @IsNumber({}, { message: "El campo salaryExpectation debe ser de tipo número" })
  salaryExpectation: number;

  @IsNumber({}, { message: "El campo employmentStatusId debe ser de tipo número" })
  employmentStatusId: number;

  @IsNumber({}, { message: "El campo cityId debe ser de tipo número" })
  cityId: number;

  @IsNumber({}, { message: "El campo desiredPositionId debe ser de tipo número" })
  desiredPositionId: number;

  @IsArray({ message: "El objeto skills debe ser un arreglo de objetos" })
  @Type(() => SkillsDto)
  @ValidateNested({ each: true })
  skills: SkillsDto[];

  @IsArray({ message: "El objeto softSkills debe ser un arreglo de objetos" })
  @Type(() => SoftSkillsDto)
  @ValidateNested({ each: true })
  softSkills: SoftSkillsDto[];

  @IsArray({ message: "El objeto certificates debe ser un arreglo de objetos" })
  @Type(() => CertificatesDto)
  @ValidateNested({ each: true })
  certificates: CertificatesDto[];

  @IsArray({ message: "El objeto educations debe ser un arreglo de objetos" })
  @Type(() => EducationsDto)
  @ValidateNested({ each: true })
  educations: EducationsDto[];

  @IsArray({ message: "El objeto languages debe ser un arreglo de objetos" })
  @Type(() => LanguagesDto)
  @ValidateNested({ each: true })
  languages: LanguagesDto[];
}

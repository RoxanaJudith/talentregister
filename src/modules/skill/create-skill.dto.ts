import { IsInt, IsString } from "class-validator";

export class CreateSkillDto {
  @IsString()
  description: string;

  @IsInt()
  typeSkill: undefined;

  [key: string]: any; 
}

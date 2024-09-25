import { IsString, IsInt } from "class-validator";

export class CreateTypeSkillDto {
    @IsString()
    name: string;
}
import { IsString, IsOptional } from 'class-validator';

export class CreateEvaluationsDto {
    @IsString()
    name: string;

    @IsOptional()
    skills: number[];

    @IsString()
    duration: string;

    @IsString()
    image: string;

    @IsString()
    url: string;

    @IsOptional()
    state: string;
}

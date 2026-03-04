import { IsString, IsOptional, IsArray, IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  company: string;

  @IsString()
  role: string;

  @IsString()
  location: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  achievements: string[];

  @IsArray()
  @IsString({ each: true })
  responsibilities: string[];

  @IsArray()
  @IsString({ each: true })
  technologies: string[];

  @IsArray()
  @IsString({ each: true })
  highlights: string[];

  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}

export class UpdateExperienceDto {
  @IsOptional()
  @IsString()
  company?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  location?: string;

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsBoolean()
  isCurrent?: boolean;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  achievements?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  responsibilities?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  technologies?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  highlights?: string[];

  @IsOptional()
  @IsNumber()
  sortOrder?: number;
}

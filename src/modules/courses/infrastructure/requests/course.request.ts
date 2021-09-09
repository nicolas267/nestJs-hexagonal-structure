import { IsNotEmpty, IsString } from 'class-validator';

export class CourseRequest {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  teachers: string;
}

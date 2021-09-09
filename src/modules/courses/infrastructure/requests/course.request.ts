import { IsNotEmpty, IsString } from 'class-validator';

export class CourseRequest {
  title: string;

  category: string;

  description: string;

  image: string;

  link: string;

  teachers: string;
}

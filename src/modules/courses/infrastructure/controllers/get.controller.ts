import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { GetCoursesService } from '../../aplication/get.courses';
import Course from '../../domain/course';

@Controller('courses')
export class GetCoursesController {
  constructor(private getCoursesService: GetCoursesService) {}

  @Get()
  async findAll(): Promise<Course[]> {
    return this.getCoursesService.getCourses();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Course> {
    const response = await this.getCoursesService.getCourseById(id);

    if (response === undefined) {
      throw new HttpException('course not exist', HttpStatus.NOT_FOUND);
    }

    return response;
  }
}

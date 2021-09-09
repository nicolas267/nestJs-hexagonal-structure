import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { GetCoursesService } from '../../aplication/get.courses';
import ICourseEntity from '../../domain/contracts/course';

@Controller('courses')
export class GetCoursesController {
  constructor(private getCoursesService: GetCoursesService) {}

  @Get()
  async findAll(): Promise<ICourseEntity[]> {
    return this.getCoursesService.getCourses();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<ICourseEntity> {
    const response = await this.getCoursesService.getCourseById(id);

    if (response === undefined) {
      throw new HttpException('course not exist', HttpStatus.NOT_FOUND);
    }

    return response;
  }
}

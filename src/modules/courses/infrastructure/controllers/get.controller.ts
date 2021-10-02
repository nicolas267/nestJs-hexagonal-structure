import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetCoursesService } from '../../aplication/get.courses';
import { CourseDataMapper } from '../persistent/data-mapper/course.data.mapper';
import { MysqlGetRepository } from '../persistent/mysql.get.repository';

@Controller('courses')
export class GetCoursesController {
  private getCoursesService: GetCoursesService;
  constructor(
    @InjectRepository(MysqlGetRepository)
    readonly mysqlGetRepository: MysqlGetRepository,
  ) {
    this.getCoursesService = new GetCoursesService(mysqlGetRepository);
  }

  @Get()
  async findAll(): Promise<CourseDataMapper[]> {
    return this.getCoursesService.getCourses();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<CourseDataMapper> {
    const response = await this.getCoursesService.getCourseById(id);

    if (response === undefined) {
      throw new HttpException('course not exist', HttpStatus.NOT_FOUND);
    }

    return response;
  }
}

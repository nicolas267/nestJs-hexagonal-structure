import { Post, Body, Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCoursesService } from '../../aplication/post.courses';
import { CourseDataMapper } from '../persistent/data-mapper/course.data.mapper';
import { MysqlPostRepository } from '../persistent/mysql.post.repository';
import { CourseRequest } from '../requests/course.request';

@Controller('course')
export class PostCoursesController {
  private createCoursesService: PostCoursesService;
  constructor(
    @InjectRepository(MysqlPostRepository)
    readonly mysqlPostRepository: MysqlPostRepository,
  ) {
    this.createCoursesService = new PostCoursesService(mysqlPostRepository);
  }

  @Post()
  async createCourse(
    @Body() courseRequest: CourseRequest,
  ): Promise<CourseDataMapper> {
    return this.createCoursesService.create(courseRequest);
  }
}

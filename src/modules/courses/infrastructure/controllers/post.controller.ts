import { Post, Body, Controller } from '@nestjs/common';
import { PostCoursesService } from '../../aplication/post.courses';
import Course from '../../domain/course';
import { CourseRequest } from '../requests/course.request';

@Controller('course')
export class PostCoursesController {
  constructor(private postCoursesService: PostCoursesService) {}

  @Post()
  async createCourse(@Body() courseRequest: CourseRequest): Promise<Course> {
    return this.postCoursesService.create(courseRequest);
  }
}

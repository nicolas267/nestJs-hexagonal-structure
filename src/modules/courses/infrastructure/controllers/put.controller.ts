import { Put, Body, Controller, Param, HttpException } from '@nestjs/common';
import { PutCoursesService } from '../../aplication/put.courses';
import { CourseRequest } from '../requests/course.request';

@Controller('course')
export class PutCoursesController {
  constructor(private putCoursesService: PutCoursesService) {}

  @Put(':id')
  async createCourse(
    @Param('id') id: string,
    @Body() courseRequest: CourseRequest,
  ): Promise<void> {
    const response = await this.putCoursesService.update(id, courseRequest);

    if (response instanceof HttpException) {
      throw response;
    }
  }
}

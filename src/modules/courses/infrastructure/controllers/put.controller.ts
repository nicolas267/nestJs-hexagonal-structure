import { Put, Body, Controller, Param, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetCoursesService } from '../../aplication/get.courses';
import { PutCoursesService } from '../../aplication/put.courses';
import { MysqlGetRepository } from '../persistent/mysql.get.repository';
import { MysqlPutRepository } from '../persistent/mysql.put.repository';
import { CourseRequest } from '../requests/course.request';

@Controller('course')
export class PutCoursesController {
  private coursesService: PutCoursesService;
  constructor(
    @InjectRepository(MysqlPutRepository)
    readonly mysqlPutRepository: MysqlPutRepository,
    @InjectRepository(MysqlGetRepository)
    readonly mysqlGetRepository: MysqlGetRepository,
  ) {
    const getCoursesService = new GetCoursesService(mysqlGetRepository);
    this.coursesService = new PutCoursesService(
      mysqlPutRepository,
      getCoursesService,
    );
  }

  @Put(':id')
  async createCourse(
    @Param('id') id: string,
    @Body() courseRequest: CourseRequest,
  ): Promise<void> {
    const response = await this.coursesService.update(id, courseRequest);

    if (response instanceof HttpException) {
      throw response;
    }
  }
}

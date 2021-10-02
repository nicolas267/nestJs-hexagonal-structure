import { Delete, Controller, Param, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteCoursesService } from '../../aplication/delete.courses';
import { GetCoursesService } from '../../aplication/get.courses';
import { MysqlDeleteRepository } from '../persistent/mysql.delete.repository';
import { MysqlGetRepository } from '../persistent/mysql.get.repository';

@Controller('course')
export class DeleteCoursesController {
  private coursesService: DeleteCoursesService;
  constructor(
    @InjectRepository(MysqlDeleteRepository)
    readonly mysqlDeleteRepository: MysqlDeleteRepository,
    @InjectRepository(MysqlGetRepository)
    readonly mysqlGetRepository: MysqlGetRepository,
  ) {
    const getCoursesService = new GetCoursesService(mysqlGetRepository);
    this.coursesService = new DeleteCoursesService(
      mysqlDeleteRepository,
      getCoursesService,
    );
  }

  @Delete(':id')
  async createCourse(@Param('id') id: string): Promise<void> {
    const response = await this.coursesService.delete(id);

    if (response instanceof HttpException) {
      throw response;
    }
  }
}

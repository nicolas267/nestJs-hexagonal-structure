import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Id from '../domain/id';
import { MysqlDeleteRepository } from '../infrastructure/persistent/mysql.delete.repository';
import CoursesService from './base.service';
import { GetCoursesService } from './get.courses';

export class DeleteCoursesService extends CoursesService {
  private repository;
  constructor(
    @InjectRepository(MysqlDeleteRepository)
    readonly mysqlDeleteRepository: MysqlDeleteRepository,
    readonly getCoursesService: GetCoursesService,
  ) {
    super();
    this.repository = mysqlDeleteRepository;
  }

  async delete(id: string): Promise<void | HttpException> {
    const existCourse = await this.getCoursesService.getCourseById(id);

    if (existCourse === undefined) {
      return new HttpException('course not exist', HttpStatus.NOT_FOUND);
    }

    const courseId = new Id(id);

    this.repository.deleteCourse(courseId);
  }
}

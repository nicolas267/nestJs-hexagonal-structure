import { HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Category from '../domain/category';
import Course from '../domain/course';
import Description from '../domain/description';
import Id from '../domain/id';
import Image from '../domain/image';
import Link from '../domain/link';
import Teachers from '../domain/teachers';
import Title from '../domain/title';
import { MysqlPutRepository } from '../infrastructure/persistent/mysql.put.repository';
import { CourseRequest } from '../infrastructure/requests/course.request';
import CoursesService from './base.service';
import { GetCoursesService } from './get.courses';

export class PutCoursesService extends CoursesService {
  private repository;
  constructor(
    @InjectRepository(MysqlPutRepository)
    readonly mysqlPutRepository: MysqlPutRepository,
    readonly getCoursesService: GetCoursesService,
  ) {
    super();
    this.repository = mysqlPutRepository;
  }

  async update(
    id: string,
    courseRequest: CourseRequest,
  ): Promise<void | HttpException> {
    const courseId = new Id(id);

    const course = new Course(
      new Id(null),
      new Title(courseRequest.title),
      new Category(courseRequest.category),
      new Description(courseRequest.description),
      new Image(courseRequest.image),
      new Link(courseRequest.link),
      new Teachers(courseRequest.teachers),
    );

    const existCourse = await this.getCoursesService.getCourseById(id);

    if (existCourse === undefined) {
      return new HttpException('course not exist', HttpStatus.NOT_FOUND);
    }

    this.repository.updateCourse(courseId, course);
  }
}

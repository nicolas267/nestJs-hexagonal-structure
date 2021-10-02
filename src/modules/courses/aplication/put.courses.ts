import { HttpException, HttpStatus } from '@nestjs/common';
import Category from '../domain/category';
import { ICourseUpdateRepository } from '../domain/contracts/ICourseUpdateRepository';
import Course from '../domain/course';
import Description from '../domain/description';
import Id from '../domain/id';
import Image from '../domain/image';
import Link from '../domain/link';
import Teachers from '../domain/teachers';
import Title from '../domain/title';
import { CourseRequest } from '../infrastructure/requests/course.request';
import CoursesService from './base.service';
import { GetCoursesService } from './get.courses';

export class PutCoursesService extends CoursesService {
  private repository: ICourseUpdateRepository;
  private coursesService: GetCoursesService;
  constructor(
    repository: ICourseUpdateRepository,
    getCourseService: GetCoursesService,
  ) {
    super();
    this.repository = repository;
    this.coursesService = getCourseService;
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

    const existCourse = await this.coursesService.getCourseById(id);

    if (existCourse === undefined) {
      return new HttpException('course not exist', HttpStatus.NOT_FOUND);
    }

    this.repository.updateCourse(courseId, course);
  }
}

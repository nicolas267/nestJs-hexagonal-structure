import { HttpException, HttpStatus } from '@nestjs/common';
import { ICourseDeleteRepository } from '../domain/contracts/ICourseDeleteRepository';
import Id from '../domain/id';
import CoursesService from './base.service';
import { GetCoursesService } from './get.courses';

export class DeleteCoursesService extends CoursesService {
  private repository: ICourseDeleteRepository;
  private coursesService: GetCoursesService;
  constructor(
    repository: ICourseDeleteRepository,
    getCourseService: GetCoursesService,
  ) {
    super();
    this.repository = repository;
    this.coursesService = getCourseService;
  }

  async delete(id: string): Promise<void | HttpException> {
    const existCourse = await this.coursesService.getCourseById(id);

    if (existCourse === undefined) {
      return new HttpException('course not exist', HttpStatus.NOT_FOUND);
    }

    const courseId = new Id(existCourse.id);

    this.repository.deleteCourse(courseId);
  }
}

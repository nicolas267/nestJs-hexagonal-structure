import { InjectRepository } from '@nestjs/typeorm';
import CourseEntity from '../domain/course';
import Id from '../domain/id';
import { MysqlGetRepository } from '../infrastructure/persistent/mysql.get.repository';
import CoursesService from './base.service';

export class GetCoursesService extends CoursesService {
  private repository;
  constructor(
    @InjectRepository(MysqlGetRepository)
    readonly mysqlGetRepository: MysqlGetRepository,
  ) {
    super();
    this.repository = mysqlGetRepository;
  }

  getCourses(): Promise<CourseEntity[]> {
    return this.repository.getAll();
  }

  getCourseById(id: string): Promise<CourseEntity> {
    const courseId = new Id(id);
    return this.repository.findCourseById(courseId);
  }
}

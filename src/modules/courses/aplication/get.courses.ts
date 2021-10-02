import { ICourseGetRepository } from '../domain/contracts/ICourseGetRepository';
import Id from '../domain/id';
import CoursesService from './base.service';
import { CourseDataMapper } from '../infrastructure/persistent/data-mapper/course.data.mapper';

export class GetCoursesService extends CoursesService {
  private repository: ICourseGetRepository;
  constructor(repository: ICourseGetRepository) {
    super();
    this.repository = repository;
  }

  getCourses(): Promise<CourseDataMapper[]> {
    return this.repository.getAll();
  }

  getCourseById(id: string): Promise<CourseDataMapper> {
    const courseId = new Id(id);
    return this.repository.findCourseById(courseId);
  }
}

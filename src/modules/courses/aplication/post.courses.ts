import Category from '../domain/category';
import Course from '../domain/course';
import Description from '../domain/description';
import Id from '../domain/id';
import Image from '../domain/image';
import Link from '../domain/link';
import Teachers from '../domain/teachers';
import Title from '../domain/title';
import CoursesService from './base.service';
import { CourseDataMapper } from '../infrastructure/persistent/data-mapper/course.data.mapper';
import { ICourseCreateRepository } from '../domain/contracts/ICourseCreateRepository';
import { CourseRequest } from '../infrastructure/requests/course.request';

export class PostCoursesService extends CoursesService {
  private repository: ICourseCreateRepository;
  constructor(repository: ICourseCreateRepository) {
    super();
    this.repository = repository;
  }

  create(courseRequest: CourseRequest): Promise<CourseDataMapper> {
    const course = new Course(
      new Id(null),
      new Title(courseRequest.title),
      new Category(courseRequest.category),
      new Description(courseRequest.description),
      new Image(courseRequest.image),
      new Link(courseRequest.link),
      new Teachers(courseRequest.teachers),
    );
    return this.repository.createCourse(course);
  }
}

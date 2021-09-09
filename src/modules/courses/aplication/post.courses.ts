import { InjectRepository } from '@nestjs/typeorm';
import Category from '../domain/category';
import ICourse from '../domain/contracts/course';
import Course from '../domain/course';
import Description from '../domain/description';
import Id from '../domain/id';
import Image from '../domain/image';
import Link from '../domain/link';
import Teachers from '../domain/teachers';
import Title from '../domain/title';
import { MysqlPostRepository } from '../infrastructure/persistent/mysql.post.repository';
import { CourseRequest } from '../infrastructure/requests/course.request';
import CoursesService from './base.service';

export class PostCoursesService extends CoursesService {
  private repository;
  constructor(
    @InjectRepository(MysqlPostRepository)
    readonly mysqlPostRepository: MysqlPostRepository,
  ) {
    super();
    this.repository = mysqlPostRepository;
  }

  create(courseRequest: CourseRequest): Promise<ICourse> {
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

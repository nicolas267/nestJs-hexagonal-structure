import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CourseDataMapper } from './data-mapper/course.data.mapper';
import Course from '../../domain/course';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlPostRepository extends Repository<CourseDataMapper> {
  createCourse(course: Course): Promise<any> {
    return this.save(course.getEntity());
  }
}

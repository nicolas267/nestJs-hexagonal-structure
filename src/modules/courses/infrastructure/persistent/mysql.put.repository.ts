import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import id from '../../domain/id';
import { CourseDataMapper } from './data-mapper/course.data.mapper';
import Course from '../../domain/course';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlPutRepository extends Repository<CourseDataMapper> {
  updateCourse(courseid: id, course: Course): void {
    this.update(courseid.id, course.getEntity());
  }
}

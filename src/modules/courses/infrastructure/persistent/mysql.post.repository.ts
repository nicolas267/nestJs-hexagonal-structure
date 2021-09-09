import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CourseDataMapper } from './data-mapper/course.data.mapper';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlPostRepository extends Repository<CourseDataMapper> {
  createCourse(course): Promise<any> {
    return this.save(course.getEntity());
  }
}

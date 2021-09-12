import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CourseDataMapper } from './data-mapper/course.data.mapper';
import ICourse from '../../domain/contracts/course';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlPostRepository extends Repository<CourseDataMapper> {
  createCourse(course: ICourse): Promise<any> {
    return this.save(course.getEntity());
  }
}

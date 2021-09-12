import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import IId from '../../domain/contracts/id';
import { CourseDataMapper } from './data-mapper/course.data.mapper';
import ICourse from '../../domain/contracts/course';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlPutRepository extends Repository<CourseDataMapper> {
  updateCourse(courseid: IId, course: ICourse): Promise<any> {
    return this.update(courseid.id, course.getEntity());
  }
}

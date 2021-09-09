import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import IId from '../../domain/contracts/id';
import { CourseDataMapper } from './data-mapper/course.data.mapper';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlPutRepository extends Repository<CourseDataMapper> {
  updateCourse(courseid: IId, course): Promise<any> {
    return this.update(courseid.id, course.getEntity());
  }
}

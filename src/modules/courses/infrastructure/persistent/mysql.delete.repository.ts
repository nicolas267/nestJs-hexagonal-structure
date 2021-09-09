import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import IId from '../../domain/contracts/id';
import { CourseDataMapper } from './data-mapper/course.data.mapper';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlDeleteRepository extends Repository<CourseDataMapper> {
  deleteCourse(courseid: IId): Promise<any> {
    return this.delete(courseid.id);
  }
}

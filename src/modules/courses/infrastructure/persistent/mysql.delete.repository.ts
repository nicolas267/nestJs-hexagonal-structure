import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import id from '../../domain/id';
import { CourseDataMapper } from './data-mapper/course.data.mapper';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlDeleteRepository extends Repository<CourseDataMapper> {
  deleteCourse(courseid: id): Promise<any> {
    return this.delete(courseid.id);
  }
}

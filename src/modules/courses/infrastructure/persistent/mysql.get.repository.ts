import { Repository, EntityRepository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CourseDataMapper } from './data-mapper/course.data.mapper';
import id from '../../domain/id';

@Injectable()
@EntityRepository(CourseDataMapper)
export class MysqlGetRepository extends Repository<CourseDataMapper> {
  getAll(): Promise<CourseDataMapper[]> {
    return this.find();
  }

  findCourseById(courseId: id): Promise<CourseDataMapper> {
    return this.findOne(courseId.id);
  }
}

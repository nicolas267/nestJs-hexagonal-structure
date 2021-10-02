import { CourseDataMapper } from '../../infrastructure/persistent/data-mapper/course.data.mapper';
import Id from '../id';

export interface ICourseGetRepository {
  getAll(): Promise<CourseDataMapper[]>;
  findCourseById(id: Id): Promise<CourseDataMapper>;
}

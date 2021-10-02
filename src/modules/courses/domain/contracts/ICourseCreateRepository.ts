import { CourseDataMapper } from '../../infrastructure/persistent/data-mapper/course.data.mapper';
import Course from '../course';

export interface ICourseCreateRepository {
  createCourse(course: Course): Promise<CourseDataMapper>;
}

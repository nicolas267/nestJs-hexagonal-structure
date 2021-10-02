import Course from '../course';
import Id from '../id';

export interface ICourseUpdateRepository {
  updateCourse(id: Id, course: Course): void;
}

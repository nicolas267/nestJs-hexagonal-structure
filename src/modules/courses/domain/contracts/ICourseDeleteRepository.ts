import Id from '../id';

export interface ICourseDeleteRepository {
  deleteCourse(id: Id): void;
}

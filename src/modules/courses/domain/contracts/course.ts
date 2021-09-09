import ICategory from './category';
import IDescription from './description';
import IId from './id';
import IImage from './image';
import ILink from './link';
import ITeachers from './teachers';
import ITitle from './title';

export default interface ICourse {
  id: IId['id'];
  title: ITitle;
  category: ICategory;
  description: IDescription;
  image: IImage;
  link: ILink;
  teachers: ITeachers;
}

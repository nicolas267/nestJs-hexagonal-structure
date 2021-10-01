import Category from './category';
import Description from './description';
import Id from './id';
import Image from './image';
import Link from './link';
import Teachers from './teachers';
import Title from './title';

export default class Course {
  id: Id;
  title: Title;
  category: Category;
  description: Description;
  image: Image;
  link: Link;
  teachers: Teachers;

  constructor(
    id: Id,
    title: Title,
    category: Category,
    description: Description,
    image: Image,
    link: Link,
    teachers: Teachers,
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.image = image;
    this.link = link;
    this.teachers = teachers;
  }

  getEntity() {
    return {
      title: this.title.title,
      category: this.category.category,
      description: this.description.description,
      image: this.image.image,
      link: this.link.link,
      teachers: this.teachers.teachers,
    };
  }
}

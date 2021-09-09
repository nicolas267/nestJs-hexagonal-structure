import Category from './category';
import Icategory from './contracts/category';
import Idescription from './contracts/description';
import ICourse from './contracts/course';
import Iid from './contracts/id';
import Iimage from './contracts/image';
import Ilink from './contracts/link';
import Iteachers from './contracts/teachers';
import Ititle from './contracts/title';
import Description from './description';
import Id from './id';
import Image from './image';
import Link from './link';
import Teachers from './teachers';
import Title from './title';

export default class Course implements ICourse {
  id: Iid['id'];
  title: Ititle;
  category: Icategory;
  description: Idescription;
  image: Iimage;
  link: Ilink;
  teachers: Iteachers;

  constructor(
    id: Id,
    title: Title,
    category: Category,
    description: Description,
    image: Image,
    link: Link,
    teachers: Teachers,
  ) {
    this.id = id.id;
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

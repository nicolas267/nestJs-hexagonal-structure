import ICategory from './contracts/category';

export default class Category implements ICategory {
  category: string;

  constructor(category: string) {
    this.category = category;
  }
}

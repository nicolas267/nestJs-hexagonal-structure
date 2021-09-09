import ITitle from './contracts/title';

export default class Title implements ITitle {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

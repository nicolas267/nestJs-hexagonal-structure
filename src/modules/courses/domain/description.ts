import IDescription from './contracts/description';

export default class Description implements IDescription {
  description: string;

  constructor(description: string) {
    this.description = description;
  }
}

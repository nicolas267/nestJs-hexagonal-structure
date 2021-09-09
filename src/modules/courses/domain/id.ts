import IId from './contracts/id';

export default class Id implements IId {
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}

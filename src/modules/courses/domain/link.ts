import ILink from './contracts/link';

export default class Link implements ILink {
  link: string;

  constructor(link: string) {
    this.link = link;
  }
}

import IImage from './contracts/image';

export default class Image implements IImage {
  image: string;

  constructor(image: string) {
    this.image = image;
  }
}

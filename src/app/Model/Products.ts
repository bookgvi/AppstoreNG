import { IProducts } from './IProducts';

export class Products implements IProducts {
  constructor(
    public id: Number,
    public title: String,
    public price: Number,
    public description?: String
  ) {
  }
}

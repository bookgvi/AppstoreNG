import { IProducts } from './IProducts';

export class Products implements IProducts {
  description: String;
  id: Number;
  price: Number;
  title: String;

  constructor(
    id: Number,
    title: String,
    price: Number,
    description?: String
  ) {
  }
}

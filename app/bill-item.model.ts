import { Keg } from './keg.model';

export class BillItem {
  constructor(public product: Keg, public quantity: number = 1) { }

  total() {
    return this.product.price * this.quantity;
  }
}

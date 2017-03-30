import { Keg } from './keg.model';
import { BillItem } from './bill-item.model';

export class Bill {
  public items: BillItem[] = [];

  constructor() { }

  addOrder(product: Keg, pints: number) {
    for (let i = 0; i < this.items.length; i++) {
      let item: BillItem = this.items[i];
      let drink: Keg = item.product;

      if (product === drink) {
        item.quantity += pints;
        return;
      }
    }

    this.items.push(new BillItem(product, pints));
  }

  total() {
    let total: number = 0;

    this.items.forEach(function(element) {
      total += element.product.price * element.quantity;
    });

    return total;
  }
}

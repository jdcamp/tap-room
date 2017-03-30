import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bill } from './bill.model';
import { Keg } from './keg.model';

@Component({
  selector: 'receipt-view',
  template: `
  <div *ngIf="bill">
    <ul>
      <li *ngFor="let item of bill.items">{{item.product.name}}: \${{item.total()}}</li>
    </ul>
  </div>
  `
})

export class ReceiptComponent {
  bill: Bill = null;

  // Events
  receiveOrder(order) {
    if (! this.bill) {
      this.bill = new Bill();
    }

    this.bill.addOrder(order.drink, order.quantity);
  }
  // *********************************************
}

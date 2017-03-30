import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Bill } from './bill.model';
import { Keg } from './keg.model';

@Component({
  selector: 'receipt-view',
  template: `
  <div *ngIf="childBill">
    <ul>
      <li *ngFor="let item of childBill.items">{{item.product.name}}  \${{item.product.price}} * {{item.quantity}} :  \${{item.total()}}</li>
    </ul>
    <p>Total: \${{childBill.total()}}</p>
  </div>
  `
})

export class ReceiptComponent {
  @Input() childBill: Bill;
}

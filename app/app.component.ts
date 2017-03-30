import { Component } from '@angular/core';
import { Keg } from './keg.model';
import { Bill } from './bill.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello Tap Room</h1>

  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)" (saleSender)="saleMade($event)"></keg-list>

  <receipt-view [childBill]="testBill" (paidSender)="billPaid()"></receipt-view>

  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditting()"></edit-keg>
  <new-keg (newKegSender)="addKeg($event)"></new-keg>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Bud Lite', 'Budweiser', 2.50, 0.05),
    new Keg('Foo', 'Bar', 1.00, 0.40)
  ];
  testBill: Bill = null;

  selectedKeg: Keg = null;

  editKeg(keg: Keg) {
    this.selectedKeg = keg;
  }

  saleMade(keg: Keg) {
    if (this.testBill === null)
      this.testBill = new Bill();
    this.testBill.addOrder(keg, 1);
  }

  finishedEditting() {
    this.selectedKeg = null;
  }
  billPaid() {
    this.testBill = null;
  }

  addKeg(keg: Keg) {
    this.masterKegList.push(keg);
  }
}

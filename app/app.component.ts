import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello Tap Room</h1>

  <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>

  <edit-keg [childSelectedKeg]="selectedKeg" (doneButtonClickedSender)="finishedEditting()"></edit-keg>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Bud Lite', 'Budweiser', 2.50, 0.05),
    new Keg('Foo', 'Bar', 1.00, 0.40)
  ];

  selectedKeg: Keg = null;

  editKeg(keg: Keg) {
    this.selectedKeg = keg;
  }

  finishedEditting() {
    this.selectedKeg = null;
  }
}

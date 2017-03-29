import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <table class="table table-striped">
    <thead>
      <tr>
        <td>Name</td>
        <td>Brand</td>
        <td>Price</td>
        <td>ABV</td>
        <td>Sell Pint</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let keg of childKegList">
        <td>{{keg.name}}</td>
        <td>{{keg.brand}}</td>
        <td> {{keg.price}}</td>
        <td>{{keg.abv}}</td>
        <td>
          <button (click)='sellPint(keg)' [disabled]="kegSoldOut(keg)">Sell 1 Pint</button> {{keg.volumeRemaining}}
        </td>
        <td>
          <button (click)="editButtonHasBeenClicked(keg)">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  // Events
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  // *********************************************

  sellPint(keg: Keg) {
    if (keg.volumeRemaining > 0)
      --keg.volumeRemaining;
  }

  kegSoldOut(keg: Keg) {
    return keg.volumeRemaining <= 0;
  }
}

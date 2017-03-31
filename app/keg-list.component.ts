import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allKegs">All</option>
    <option value="lowVolumeKegs">Low inventory</option>
  </select>

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
      <tr *ngFor="let keg of childKegList | lowVolume:filterByVolume" [class]='isLow(keg)'>
        <td>{{keg.name}}</td>
        <td>{{keg.brand}}</td>
        <td> {{keg.price}}</td>
        <td>{{keg.abv}}</td>
        <td>
          <button class="btn btn-success" (click)='sellPint(keg)' [disabled]="kegSoldOut(keg)">Sell 1 Pint</button> {{keg.volumeRemaining}}
        </td>
        <td>
          <button class="btn btn-warning" (click)="editButtonHasBeenClicked(keg)">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  @Output() saleSender = new EventEmitter();

  filterByVolume: string = 'allKegs';

  // Events
  onChange(optionFromMenu) {
    this.filterByVolume = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
  // *********************************************

  sellPint(keg: Keg) {
    if (keg.volumeRemaining > 0) {
      --keg.volumeRemaining;
      this.saleSender.emit(keg);
    }
  }

  kegSoldOut(keg: Keg) {
    return keg.volumeRemaining <= 0;
  }
  isLow(keg: Keg) {
    if (keg.volumeRemaining  < 120)
      return "red"
  }
}

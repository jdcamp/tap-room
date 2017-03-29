import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="childSelectedKeg">
      <h1>{{childSelectedKeg.name}}</h1>

      <form>
        <label for='name'>Name:</label>
        <input name='name' type='text' [(ngModel)]="childSelectedKeg.name" placeholder='Beer name'>

        <label for='brand'>Brand:</label>
        <input name='brand' type='text' [(ngModel)]="childSelectedKeg.brand" placeholder='Brand'>

        <label for='price'>Price:</label>
        <input name='price' type='number' step='.01' min='0' [(ngModel)]="childSelectedKeg.price" placeholder='Price'>

        <label for='abv'>ABV:</label>
        <input name='abv' type='number' step='.01' min='0' max='1' [(ngModel)]="childSelectedKeg.abv" placeholder='ABV'>
      </form>
      <button (click)="doneButtonClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  // Events
  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
  // *********************************************
}

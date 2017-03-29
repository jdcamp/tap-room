import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello Tap Room</h1>

  <keg-list></keg-list>

  <div *ngIf="edittingKeg">
    <h1>{{edittingKeg.name}}</h1>

    <form>
      <label for='name'>Name:</label>
      <input name='name' type='text' [(ngModel)]="edittingKeg.name" placeholder='Beer name'>

      <label for='brand'>Brand:</label>
      <input name='brand' type='text' [(ngModel)]="edittingKeg.brand" placeholder='Brand'>

      <label for='price'>Price:</label>
      <input name='price' type='number' step='.01' min='0' [(ngModel)]="edittingKeg.price" placeholder='Price'>

      <label for='abv'>ABV:</label>
      <input name='abv' type='number' step='.01' min='0' max='1' [(ngModel)]="edittingKeg.abv" placeholder='ABV'>

    </form>
  </div>
  `
})

export class AppComponent {
  editKeg(keg: Keg) {
    this.edittingKeg = keg;
  }
}

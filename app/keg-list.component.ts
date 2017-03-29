import { Component } from '@angular/core';
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
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let keg of kegs">
        <td>{{keg.name}}</td>
        <td>{{keg.brand}}</td>
        <td> {{keg.price}}</td>
        <td>{{keg.abv}}</td>
        <td>
          <button (click)='sellPint(keg)' [disabled]="kegSoldOut(keg)">Sell 1 Pint</button> {{keg.volumeRemaining}}
        </td>
      </tr>
    </tbody>
  </table>
  `
})

export class KegListComponent {
  kegs: Keg[] = [
    new Keg('Bud Lite', 'Budweiser', 2.50, 0.05),
    new Keg('Foo', 'Bar', 1.00, 0.40)
  ];

  sellPint(keg: Keg) {
    if (keg.volumeRemaining > 0)
      --keg.volumeRemaining;
  }

  kegSoldOut(keg: Keg) {
    return keg.volumeRemaining <= 0;
  }
}

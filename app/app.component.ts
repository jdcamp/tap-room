import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello Tap Room</h1>

  <table class="table table-striped">
    <thead>
      <tr>
        <td>Name</td>
        <td>Brand</td>
        <td>Price</td>
        <td>ABV</td>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let keg of kegs">
        <td>{{keg.name}}</td>
        <td>{{keg.brand}}</td>
        <td>$ {{keg.price}}</td>
        <td>{{keg.abv}}</td>
      </tr>
    </tbody>
  </table>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Bud Lite', 'Budweiser', 2.50, 0.05),
    new Keg('Foo', 'Bar', 1.00, 0.40)
  ];
}

export class Keg {
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public abv: number) {

  }
}

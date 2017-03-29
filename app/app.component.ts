import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Hello Tap Room</h1>
  <ul>
    <li *ngFor="let keg of kegs">
      {{keg.name}}
    </li>
  </ul>
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

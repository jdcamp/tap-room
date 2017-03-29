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
      <tr *ngFor="let keg of kegs" (click)='editKeg(keg)'>
        <td>{{keg.name}}</td>
        <td>{{keg.brand}}</td>
        <td> {{keg.price}}</td>
        <td>{{keg.abv}}</td>
      </tr>
    </tbody>
  </table>
  <button (click)='newKeg()'>New</button>

  <div *ngIf="edittingKeg">
    <h1>{{edittingKeg.name}}</h1>

    <form>
      <label for='name'>Name:</label>
      <input name='name' type='text' [(ngModel)]="edittingKeg.name" placeholder='Beer name'>

      <label for='brand'>Brand:</label>
      <input name='brand' type='text' [(ngModel)]="edittingKeg.brand" placeholder='Brand'>
    </form>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Bud Lite', 'Budweiser', 2.50, 0.05),
    new Keg('Foo', 'Bar', 1.00, 0.40)
  ];

  edittingKeg: Keg = null;

  editKeg(keg: Keg) {
    this.edittingKeg = keg;
  }

  newKeg() {
    let newKeg: Keg = new Keg('', '', null, null);
    this.editKeg(newKeg);
    this.kegs.push(newKeg);
  }
}

export class Keg {
  public volumeRemaining: number = 124;
  constructor(
    public name: string,
    public brand: string,
    public price: number,
    public abv: number) {

  }
}

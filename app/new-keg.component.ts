import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <label>Name:</label>
    <input #newName>
  </div>
  <div>
    <label>Brand:</label>
    <input #newBrand>
  </div>
  <div>
    <label>Price:</label>
    <input #newPrice type='number' step='.01' min='0' placeholder='$0.00'>
  </div>
  <div>
    <label for='abv'>ABV:</label>
    <input #newAbv type='number' step='.01' min='0' max='1' placeholder='0.00'>
  </div>
  <button class="btn btn-success" (click)="submitForm(newName.value, newBrand.value, newPrice.value, newAbv.value); newName.value = ''; newBrand.value = ''; newPrice.value = ''; newAbv.value = '';">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, abv: number) {
    if(name === '' || brand === '' || price <= 0 || abv <= 0)
      return;
    let newKegToAdd: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}

import { Component, EventEmitter} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'add-restaurant',
  outputs: ['onSubmit'],
  template: `
  <div>
    <h3>Add New Restaurant</h3>
    <label>Restaurant Name</label>
    <input placeholder="Name" #newName>
    <label>Restaurant Specialty</label>
    <select #newSpecialty>
      <option value="Burgers">Burgers</option>
      <option value="Pizza">Pizza</option>
      <option value="Sushi">Sushi</option>
    </select>
    <label>Restaurant Address</label>
    <input placeholder="Address" #newAddress>
    <label>Restaurant Price</label>
    <input type="number" min=0.5 max=5 step=0.5 placeholder="$" #newPrice>
    <button (click)="addRestaurant(newName, newSpecialty, newAddress, newPrice)">Add</button>
  </div>
  `
})

export class AddRestaurantComponent {
  public onSubmit: EventEmitter<any[]>;
  constructor(){
    this.onSubmit = new EventEmitter();
  }
  addRestaurant(newName: HTMLInputElement, newSpecialty: HTMLInputElement, newAddress: HTMLInputElement, newPrice: HTMLInputElement) {
    this.onSubmit.emit([newName.value, newSpecialty.value, newAddress.value, parseInt(newPrice.value)])
    console.log(newSpecialty.value);
    newSpecialty.value = '';
    console.log(newName.value);
    newName.value = '';
    console.log(newAddress.value);
    newAddress.value = '';
    console.log(newPrice.value);
    newPrice.value = '';
  }
}

import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant.component';
import { SpecialtyPipe } from './speciality.pipe';
import { DeleteRestaurantComponent } from './delete-restaurant.component'

@Component({
  selector: 'restaurant-list',
  directives: [RestaurantComponent, EditRestaurantComponent, AddRestaurantComponent, DeleteRestaurantComponent],
  inputs: ['restaurants', 'specialties'],
  pipes: [SpecialtyPipe],
  template: `
    <div class="container">
      <h1>These are the Restaurants</h1>
      <select (change)="onSpecialtyChange($event.target.value)">
        <option value="all">Show All</option>
        <option *ngFor="#currentSpecialty of specialties" value="{{ currentSpecialty }}">{{ currentSpecialty}}</option>
      </select>
      <restaurant-display *ngFor="#currentRestaurant of restaurants | specialty:specialtyProperty" [restaurant]="currentRestaurant" (click)="restaurantClicked(currentRestaurant)"></restaurant-display>
      <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" [specialties]="specialties"></edit-restaurant>
      <delete-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" [restaurants]="restaurants"></delete-restaurant>
      <add-restaurant (onSubmit)="createRestaurant($event)" [specialties]="specialties"></add-restaurant>
      <form>
        <label>Add new Specialty</label>
        <input #newSpecialty required>
        <button (click)="addSpecialty(newSpecialty)">Go</button>
      </form>
    </div>
  `
})
export class RestaurantListComponent {
  public restaurants: Restaurant[];
  public specialties: any[];
  public selectedRestaurant: Restaurant;
  public specialtyProperty: string = "all";
  constructor(){
  }
  restaurantClicked(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }
  createRestaurant(args: any[]) {
    this.restaurants.push(
      new Restaurant(args[0], args[1], args[2], args[3], this.restaurants.length)
    );
  }
  onSpecialtyChange(filterOption) {
    this.specialtyProperty = filterOption;
  }
  addSpecialty(specialty: HTMLInputElement) {
    // if (!this.specialties.includes(specialty.value)) {
      this.specialties.push(specialty.value);
    // }
  }
}

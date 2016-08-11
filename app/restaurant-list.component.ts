import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant.component';
import { SpecialtyPipe } from './speciality.pipe';
import { DeleteRestaurantComponent } from './delete-restaurant.component';
import { TopFivePipe } from './top-five.pipe';

@Component({
  selector: 'restaurant-list',
  directives: [RestaurantComponent, EditRestaurantComponent, AddRestaurantComponent, DeleteRestaurantComponent],
  inputs: ['restaurants', 'specialties'],
  pipes: [SpecialtyPipe, TopFivePipe],
  template: `
    <div class="container">
      <h1>These are the Restaurants</h1>
      <select (change)="onSpecialtyChange($event.target.value)">
        <option value="all">Show All</option>
        <option *ngFor="#currentSpecialty of specialties" value="{{ currentSpecialty }}">{{ currentSpecialty}}</option>
      </select>
      <select (change)="selectFiveChange($event.target.value)">
        <option value="topFive">Top Five</option>
        <option value="this">Show None</option>
        <option value="all" selected="selected">Show All</option>
      </select>
      <restaurant-display *ngFor="#currentRestaurant of restaurants | specialty:specialtyProperty | topFive:selectFiveProperty" [restaurant]="currentRestaurant" (click)="restaurantClicked(currentRestaurant)"></restaurant-display>
      <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" [specialties]="specialties"></edit-restaurant>
      <delete-restaurant (onSubmit)="resetSelectedRestaurant()" *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" [restaurants]="restaurants"></delete-restaurant>
      <add-restaurant (onSubmit)="createRestaurant($event)" [specialties]="specialties"></add-restaurant>

    </div>

    <button (click)="sortMethod()">Sort Me</button>
  `
})
export class RestaurantListComponent {
  public restaurants: Restaurant[];
  public specialties: any[];
  public selectedRestaurant: Restaurant;
  public specialtyProperty: string = "all";
  public selectFiveProperty: string = "all";
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
  onSpecialtyChange(filterOption: string) {
    this.specialtyProperty = filterOption;
  }
  resetSelectedRestaurant() {
    this.selectedRestaurant = null;
  }
  selectFiveChange(filterOption: string) {
    this.selectFiveProperty = filterOption;
    console.log(this.selectFiveProperty);
  }
  sortMethod() {
    console.log("Sorting");
    this.restaurants.sort((a, b): number => {
      if (a.price < b.price) {
        return -1;
      } else if (a.price > b.price) {
        return 1;
      } else {
        return 0;
      }
    });
    for (var i: number = 0; i < this.restaurants.length; i++) {
      this.restaurants[i].id = i;
    }
  }

}

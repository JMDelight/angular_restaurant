import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant.component';

@Component({
  selector: 'restaurant-list',
  directives: [RestaurantComponent, EditRestaurantComponent, AddRestaurantComponent],
  inputs: ['restaurants'],
  template: `
    <div class="container">
      <h1>These are the Restaurants</h1>
      <restaurant-display *ngFor="#currentRestaurant of restaurants" [restaurant]="currentRestaurant" (click)="restaurantClicked(currentRestaurant)"></restaurant-display>
      <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" ></edit-restaurant>
      <add-restaurant (onSubmit)="createRestaurant($event)"></add-restaurant>
    </div>
  `
})
export class RestaurantListComponent {
  public restaurants: Restaurant[];
  public selectedRestaurant: Restaurant;
  constructor(){
    console.log(this.restaurants)
  }
  restaurantClicked(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }
  createRestaurant(args: any[]) {
    this.restaurants.push(
      new Restaurant(args[0], args[1], args[2], args[3], this.restaurants.length)
    );
  }
}

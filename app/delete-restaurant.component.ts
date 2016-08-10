import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'delete-restaurant',
  inputs: ['restaurant', 'restaurants'],
  template: `
  <div>
    <h3>Delete Restaurant</h3>
    <button (click)="deleteRestaurant()" >Delete</button>
  </div>
  `
})

export class DeleteRestaurantComponent {
  public restaurant: Restaurant
  public restaurants: Restaurant[]
  constructor(){

  }
  deleteRestaurant() {
    if (this.restaurants.includes(this.restaurant)) {
      this.restaurants.splice(this.restaurant.id, 1)
      for (var i: number = this.restaurant.id; i < this.restaurants.length; i++) {
        this.restaurants[i].id = i;
      }
    }
  }
}

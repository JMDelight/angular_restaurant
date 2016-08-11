import { Component, EventEmitter } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'delete-restaurant',
  inputs: ['restaurant', 'restaurants'],
  outputs: ['onSubmit'],
  template: `
  <div>
    <h3>Delete Restaurant</h3>
    <button (click)="deleteRestaurant()" >Delete</button>
  </div>
  `
})

export class DeleteRestaurantComponent {
  public onSubmit: EventEmitter<string>;

  public restaurant: Restaurant
  public restaurants: Restaurant[]
  constructor(){
    this.onSubmit = new EventEmitter();
  }
  deleteRestaurant() {
    this.restaurants.splice(this.restaurant.id, 1)
    for (var i: number = this.restaurant.id; i < this.restaurants.length; i++) {
      this.restaurants[i].id = i;
    }
    this.onSubmit.emit("Hi");
  }

}

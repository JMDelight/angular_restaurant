
import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantListComponent } from './restaurant-list.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantListComponent],
  template: `
    <div class="container">
      <restaurant-list [restaurants]="restaurants" [specialties]="specialties"></restaurant-list>
    </div>
  `
})
export class AppComponent {
  public restaurants: Restaurant[];
  public specialties: string[];
  constructor(){
    this.restaurants = [
      new Restaurant('Bobs', 'Burgers', '111 1st Street', 3, 0 ),
      new Restaurant('Pizza Hog', 'Pizza', '131 3rd Street', 2, 1 ),
      new Restaurant('Pasta Planet', 'Sushi', '14 23st Street', 5, 2 )
    ];
    this.specialties = ['Burgers', 'Pizza', 'Sushi'];
  }
}

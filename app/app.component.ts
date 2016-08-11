
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
      new Restaurant('Pasta Planet', 'Sushi', '14 23st Street', 5, 2 ),
      new Restaurant('Gravy Train', 'Gravy', '131 6st Street', 3, 3 ),
      new Restaurant('Noodle Farm', 'Pie', '136 12th Street', 2, 4 ),
      new Restaurant('Original Wafer', 'Pizza', '1414 29th Street', 5, 5 ),
      new Restaurant('Pattys Pattys', 'Burgers', '3411 56th Street', 3, 6 ),
      new Restaurant('Sludge Master', 'Gravy', '138 12th Street', 2, 7 ),
      new Restaurant('On a Roll', 'Sushi', '234 28th Street', 5, 8 )
    ];
    this.specialties = ['Burgers', 'Pizza', 'Sushi', 'Gravy', 'Pie'];
  }
}

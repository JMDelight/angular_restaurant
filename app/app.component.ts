
import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';

@Component({
  selector: 'my-app',
  directives: [RestaurantComponent],
  template: `
    <div class="container">
      <h1>This is the Restaurant List component</h1>
      <restaurant-display [restaurant]="restaurant"></restaurant-display>
    </div>
  `
})
export class AppComponent {
  public restaurants: Restaurant[];
  public restaurant: Restaurant =  new Restaurant('Bobs', 'Burgers', '111 1st Street', 3, 1 );
  constructor(){
  }
}

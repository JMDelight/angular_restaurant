import { Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
    <div>
      <h1>{{ restaurant.name }} - This is a restaurant.</h1>
    </div>
  `

})
export class RestaurantComponent {
  public restaurant: Restaurant;
}

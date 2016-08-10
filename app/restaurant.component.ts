import { Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
    <div>
      <h3>{{ restaurant.name }} | {{ restaurant.specialty }} | {{ restaurant.address}} | {{restaurant.price}} | {{ restaurant.id}} | {{ restaurant.averageRating }}</h3>
    </div>
  `

})
export class RestaurantComponent {
  public restaurant: Restaurant;
}

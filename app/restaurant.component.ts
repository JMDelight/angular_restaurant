import { Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'restaurant-display',
  inputs: ['restaurant'],
  template: `
    <div>
      <p class="css-restaurant">{{ restaurant.name }} | {{ restaurant.specialty }} | {{ restaurant.address}} | {{restaurant.price}} | {{ restaurant.averageRating }}</p>
    </div>
  `

})
export class RestaurantComponent {
  public restaurant: Restaurant;
}

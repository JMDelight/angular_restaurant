
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
      new Restaurant('Bobs', 'Burgers', '111 1st Street', Math.floor((Math.random() * 5) + 1), 0 ),
      new Restaurant('Pizza Hog', 'Pizza', '131 3rd Street', Math.floor((Math.random() * 5) + 1), 1 ),
      new Restaurant('Pasta Planet', 'Sushi', '14 23st Street', Math.floor((Math.random() * 5) + 1), 2 ),
      new Restaurant('Gravy Train', 'Gravy', '131 6st Street', Math.floor((Math.random() * 5) + 1), 3 ),
      new Restaurant('Noodle Farm', 'Pie', '136 12th Street', Math.floor((Math.random() * 5) + 1), 4 ),
      new Restaurant('Original Wafer', 'Pizza', '1414 29th Street', Math.floor((Math.random() * 5) + 1), 5 ),
      new Restaurant('Patty\'s Pattys', 'Burgers', '3411 56th Street', 3, 6 ),
      new Restaurant('Sludge Master', 'Gravy', '138 12th Street', Math.floor((Math.random() * 5) + 1), 7 ),
      new Restaurant('Super Pie', 'Pizza', '237 28th Street', Math.floor((Math.random() * 5) + 1), 8 ),
      new Restaurant('Amigos', 'Mexican', '234 38th Street', Math.floor((Math.random() * 5) + 1), 9 ),
      new Restaurant('Gatten', 'Sushi', '1234 124th Street', Math.floor((Math.random() * 5) + 1), 10 ),
      new Restaurant('Slice of Hell', 'Pizza', '666 Bro Street', Math.floor((Math.random() * 5) + 1), 11 ),
      new Restaurant('Don Pedro\'s', 'Mexican', '1 Candy Lane', Math.floor((Math.random() * 5) + 1), 12 ),
      new Restaurant('Good Gravy', 'Gravy', '234 28th Street', Math.floor((Math.random() * 5) + 1), 13 ),
      new Restaurant('Todd\'s Burrito Fountain', 'Mexican', '234 28th Street', Math.floor((Math.random() * 5) + 1), 14 ),
      new Restaurant('Taco the Town', 'Mexican', '234 28th Street', Math.floor((Math.random() * 5) + 1), 15 ),
      new Restaurant('Slice of Heaven', 'Pie', '777 7th Lane', Math.floor((Math.random() * 5) + 1), 16 )
    ];
    for(var i: number = 0; i < this.restaurants.length; i++) {
      var ratingAmount: number = Math.floor((Math.random() * 4) + 3);
      for(var j: number = 0; j < ratingAmount; j++) {
        this.restaurants[i].rating.push(Math.floor((Math.random() * 5) + 1));
      }
      var totalRatings: number = 0;
      this.restaurants[i].rating.forEach(function(rating) {
        totalRatings += rating;
      })
      this.restaurants[i].averageRatingFloat = parseFloat((totalRatings / this.restaurants[i].rating.length).toString().slice(0, 4))
      this.restaurants[i].averageRating = this.restaurants[i].averageRatingFloat.toString() + " out of 5 stars with " + this.restaurants[i].rating.length.toString() + " reviews.";
    }
    this.specialties = ['Burgers', 'Pizza', 'Sushi', 'Gravy', 'Pie', 'Mexican'];
  }
}

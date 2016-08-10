import { Component} from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Component({
  selector: 'edit-restaurant',
  inputs: ['restaurant'],
  template: `
  <h3>Edit Restaurant Details</h3>
  <label>Change Name</label>
  <input [(ngModel)]="restaurant.name">
  <label>Change Specialty</label>
  <select [(ngModel)]="restaurant.specialty">
    <option value="Burgers">Burgers</option>
    <option value="Pizza">Pizza</option>
    <option value="Sushi">Sushi</option>
  </select>
  <label>Change Address</label>
  <input [(ngModel)]="restaurant.address">
  <label>Change Price</label>
  <input type="number" min=0.5 max=5 step=0.5 [(ngModel)]="restaurant.price">
  <h3>Rate This Restaurant</h3>
  <select #newRating>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
  <button (click)="addReview(newRating)"></button>
  `
})

export class EditRestaurantComponent {
  public restaurant: Restaurant;

  addReview(newReview: HTMLInputElement) {
    this.restaurant.rating.push(parseInt(newReview.value));
    var totalRatings: number = 0;
    this.restaurant.rating.forEach(function(rating) {
      totalRatings += rating;
    })
    this.restaurant.averageRatingFloat = parseFloat((totalRatings / this.restaurant.rating.length).toString().slice(0, 4))
    this.restaurant.averageRating = this.restaurant.averageRatingFloat.toString() + " out of 5 stars with " + this.restaurant.rating.length.toString() + " reviews.";
    console.log(newReview.value);
  }
}

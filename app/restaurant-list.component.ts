import { Component } from 'angular2/core';
import { Restaurant } from './restaurant.model';
import { RestaurantComponent } from './restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant.component';
import { AddRestaurantComponent } from './add-restaurant.component';
import { SpecialtyPipe } from './speciality.pipe';
import { DeleteRestaurantComponent } from './delete-restaurant.component';
import { TopFivePipe } from './top-five.pipe';
import { CssControlComponent } from './css-control.component';

@Component({
  selector: 'restaurant-list',
  directives: [RestaurantComponent, EditRestaurantComponent, AddRestaurantComponent, DeleteRestaurantComponent, CssControlComponent],
  inputs: ['restaurants', 'specialties'],
  pipes: [SpecialtyPipe, TopFivePipe],
  template: `
    <div class="container">
      <css-control></css-control>
      <div class="row">
        <div class="col-md-12">
          <h1 class="page-header">These are the Restaurants</h1>
          <select (change)="onSpecialtyChange($event.target.value)">
            <option value="all">Show All</option>
            <option *ngFor="#currentSpecialty of specialties" value="{{ currentSpecialty }}">{{ currentSpecialty}}</option>
          </select>
          <select (change)="selectFiveChange($event.target.value)">
            <option value="topFive">Top Five</option>
            <option value="all" selected="selected">Show All</option>
          </select>
        </div>
      </div>
      <div id="css-restaurant">
        <restaurant-display *ngFor="#currentRestaurant of restaurants | specialty:specialtyProperty | topFive:selectFiveProperty" [restaurant]="currentRestaurant" (click)="restaurantClicked(currentRestaurant)" ></restaurant-display>
      </div>
      <edit-restaurant *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" [specialties]="specialties"></edit-restaurant>
      <delete-restaurant (onSubmit)="resetSelectedRestaurant()" *ngIf="selectedRestaurant" [restaurant]="selectedRestaurant" [restaurants]="restaurants"></delete-restaurant>
      <add-restaurant (onSubmit)="createRestaurant($event)" [specialties]="specialties"></add-restaurant>

    </div>
    <button (click)="sortMethod('price')">Sort By Price</button>
    <button (click)="sortMethod('rating')">Sort By Rating</button>
    <css-control></css-control>
  `
})
export class RestaurantListComponent {
  public restaurants: Restaurant[];
  public specialties: any[];
  public selectedRestaurant: Restaurant;
  public specialtyProperty: string = "all";
  public selectFiveProperty: string = "all";
  constructor(){
  }
  restaurantClicked(clickedRestaurant: Restaurant) {
    this.selectedRestaurant = clickedRestaurant;
  }
  createRestaurant(args: any[]) {
    this.restaurants.push(
      new Restaurant(args[0], args[1], args[2], args[3], this.restaurants.length)
    );
  }
  onSpecialtyChange(filterOption: string) {
    this.specialtyProperty = filterOption;
  }
  resetSelectedRestaurant() {
    this.selectedRestaurant = null;
  }
  selectFiveChange(filterOption: string) {
    this.selectFiveProperty = filterOption;
    console.log(this.selectFiveProperty);
  }
  sortMethod(parameter) {
    var sortTimes: number = 0
    if (parameter === "price") {
      this.restaurants.sort((a, b): number => {
        sortTimes ++;
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return 0;
        }
      });
    } else if (parameter === "rating") {
      this.restaurants.sort((a, b): number => {
        sortTimes ++;
        if (a.averageRatingFloat < b.averageRatingFloat) {
          return 1;
        } else if (a.price > b.price) {
          return -1;
        } else {
          return 0;
        }
      });
    }
    for (var i: number = 0; i < this.restaurants.length; i++) {
      this.restaurants[i].id = i;
    }
    console.log("Sort ran " + sortTimes + " times.");
  }

}

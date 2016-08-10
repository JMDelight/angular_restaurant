
import {Pipe, PipeTransform} from 'angular2/core';
import {Restaurant} from './restaurant.model';

@Pipe({
  name: "specialty",
  pure: false
})
export class SpecialtyPipe implements PipeTransform {
  transform(input: Restaurant[], args) {
    var desiredSpecialtyState = args[0];
    console.log("In Specialty Pipe");
    console.log(desiredSpecialtyState);
    if(desiredSpecialtyState === "all") {
      return input;
    } else {
      return input.filter((restaurant) => {
        return (restaurant.specialty === desiredSpecialtyState);
      });
    }
  }
}

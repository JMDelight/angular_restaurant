import { Pipe, PipeTransform } from 'angular2/core';
import { Restaurant } from './restaurant.model';

@Pipe({
  name: "topFive",
  pure: false

})

export class TopFivePipe implements PipeTransform {
  transform = function (input: Restaurant[], args) {
    var output: Restaurant[] = [];
    if ( args[0] === "topFive" ) {
      for (var i = 0; i < 5; i++) {
        output.push(input[i]);
      }
    } else if ( args[0] === "this") {

    } else {
      return input;
    }
    return output;
  }
}

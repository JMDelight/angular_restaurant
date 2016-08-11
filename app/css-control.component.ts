import { Component } from 'angular2/core';

@Component({
  selector: 'css-control',
  template: `
    <button (click)="backgroundRepeater()">Change Background</button>
    <button (click)="fontChanger()">Change Font Size</button>
  `
})
export class CssControlComponent {
  public backgroundBoolean: boolean = true;
  fontChanger() {
    setInterval(
      function() {
        var newFont: number = Math.floor(Math.random() * 22) + 10;
        // $('.css-restaurant').css('font-size', newFont)
        // var all = document.getElementsByClassName('css-restaurant');
        // for (var i = 0; i < all.length; i++) {
        //   all[i].styles["font-size"] = newFont;
        // }
        document.getElementById('css-restaurant').style["font-size"] = newFont;
      }, 500 );
  }
  backgroundRepeater() {
    setInterval(
      function() {
        var newColor: string = "#";
        var letterArray: string[] = ["a","b","c","d","e","f",];
        while ( newColor.length < 7 ) {
          var hexNumber: number = Math.floor((Math.random() * 16));
          var hexNumberString: string = hexNumber.toString();
          if ( hexNumber > 9 ) {
            hexNumberString = letterArray[hexNumber - 10];
          }
          newColor += hexNumberString;
        }
        if(this.backgroundBoolean) {
          document.getElementById('body-id').style["background-color"] = newColor;
          this.backgroundBoolean = false;
        } else {
          document.getElementById('body-id').style["color"] = newColor;
          this.backgroundBoolean = true;
        }
      }, 250 );
  }

}

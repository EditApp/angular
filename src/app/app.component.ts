import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  post = {
    title: 'Angularrr app ded',
    isFavourite: true
  }
  onFavouriteChanged(isFavourite) {
    console.log('favourite is changed', isFavourite);
  }
}

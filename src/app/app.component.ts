import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from 'src/app/favourite/favourite.component';

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
  onFavouriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favourite is changed', eventArgs);
  }
}

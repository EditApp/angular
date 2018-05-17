import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from 'src/app/favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];


  viewMode = 'map';

  tweet = {
    body: 'like it',
    isLiked: true,
    likesCount: 0
  }

  post = {
    title: 'Angularrr app ded',
    isFavourite: true
  }
  onFavouriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('favourite is changed', eventArgs);
  }


}

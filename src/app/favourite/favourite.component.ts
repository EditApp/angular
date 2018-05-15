import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  isFavourite: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
  }

}

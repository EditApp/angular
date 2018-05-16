import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
 @Input('isFavourite') isSelected: boolean;
 @Output('change') click = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isSelected = !this.isSelected;
    this.click.emit({newValue: this.isSelected});
  }

}


export interface FavoriteChangedEventArgs {
  newValue: boolean
}


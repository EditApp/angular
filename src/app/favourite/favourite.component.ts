import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
//import { ViewEncapsulation } from '@angular/core/src/metadata/view';
//import { EventEmitter } from 'selenium-webdriver';

@Component({
  selector: 'favorite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
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


import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template: `
  <h2>{{ "Titre::"  +  getTitle() }}</h2>
  <h2 [textContent]="title"></h2>
  <p> {{ textcustompipe | summary:10 }}</p>
  <ul>
    <li *ngFor="let course of courses">
      {{ course | uppercase }}
    </li>
  </ul>
  <div  [class]="isFavourite ? ' glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'" ></div>
  <img src="{{ imageUrl }}"/>
  <img [src]="imageUrl"/>
  <table>
    <tr>
      <td [attr.colspan]="colSpan"></td>
    </tr>
  </table>
  <div (click)="onDivClickedAg()">
    <div (click)="onDivClicked()">
      <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'grey'"   (click)="onSave($event)">Save</button>
    </div>
  </div>

  <input [value]="email" (keyup.enter)="onKeyUpV()"/>
  <input [(ngModel)]="email" (keyup.enter)="onKeyUpV()"/>


  <input (keyup)="onKeyUp($event)"/>
  <input (keyup.enter)="onKeyUpNew()"/>
  `
})

export class CourseComponent implements OnInit {

  isFavourite = true;
  isActive = true;
  title = "List of courses";
  textcustompipe = "Lorem ipsum dolor sit amet very very long text Lorem ipsum dolor sit amet very very long text Lorem ipsum dolor sit amet very very long text Lorem ipsum dolor sit amet very very long text";
  imageUrl = "http://www.travelalerts.ca/wp-content/uploads/2014/03/Shallow-Waters.jpg";
  colspan = 2;

  onSave($event) {
    $event.stopPropagation();
    console.log('button was clicked' , $event);
  }
  //or
  email;//encapsulate data
  onKeyUpV() {
    //logic behind the view
    console.log(this.email)
   }
  // was in template: <input #email (keyup.enter)="onKeyUpV(email.value)"/>

  //or
  // onKeyUpV(email) {
  //   console.log(email)
  //  }

   
  onKeyUp($event) {
   if($event.keyCode === 13) console.log("Enter was pressed", $event.target.value)
  }

  onKeyUpNew() {
    console.log("Enter was pressed new")
   }

  onDivClicked() {
    console.log('div was clicked');
  }
  onDivClickedAg() {
    console.log('div was clicked ag');
  }
 
  //logic calling a http services for this component
  //defining service un angular
  courses;
  //adding constructor
  constructor() { 
    let service = new CoursesService();
    this.courses = service.getCourses();
  }

  ngOnInit() {

  }

  getTitle() {
    return this.title;
  }

}

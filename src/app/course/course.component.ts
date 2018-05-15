import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  template: `
  <h2>{{ "Titre::"  +  getTitle() }}</h2>
  <h2 [textContent]="title"></h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>
  <img src="{{ imageUrl }}"/>
  <img [src]="imageUrl"/>
  <table>
    <tr>
      <td [attr.colspan]="colSpan"></td>
    </tr>
  </table>
  `
})

export class CourseComponent implements OnInit {


  title = "List of courses";
  imageUrl = "http://www.travelalerts.ca/wp-content/uploads/2014/03/Shallow-Waters.jpg";
  colspan = 2;
 
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from 'src/app/courses.service';
import { SComponent } from './s/s.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

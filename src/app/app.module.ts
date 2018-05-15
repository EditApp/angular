import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from 'src/app/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

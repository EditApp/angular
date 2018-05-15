import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/authors.service';


@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  template: `
  <h2>3 Authors</h2>
  <ul>
    <li *ngFor="let author of authors">
      {{ "Authors" + author }}
    </li>
  </ul>
  `
})
export class AuthorsComponent implements OnInit {
  title = "List of Authirs";
  constructor() {
    let service = new AuthorService();
    this.authors = service.getAuthors();
   }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }

}




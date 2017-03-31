import { Component, OnInit } from '@angular/core';

import { Book } from './../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {

    // hier immer neu sortieren!
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 2),
      new Book('111', 'AngularJS 1.x', 'Oldie but Goldie', 3),
      new Book('222', 'DAs andere Buch', 'Blah')
    ];
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}


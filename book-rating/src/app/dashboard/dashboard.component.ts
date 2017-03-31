import { Component, OnInit, ViewChildren, AfterViewInit, OnDestroy } from '@angular/core';
import { BookComponent } from './../book/book.component';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Book } from './../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,
  AfterViewInit, OnDestroy {
  books: Book[];

  @ViewChildren(BookComponent) bookComponents;

  constructor() { }

  add(isbn: HTMLFormElement,
      title: HTMLFormElement,
      desc: HTMLFormElement) {
    this.books.push(new Book(isbn.value, title.value, desc.value));
    isbn.value = title.value = desc.value = '';
    this.reorderBooks();
  }

  ngOnInit() {

    // hier immer neu sortieren!
    this.books = [
      new Book('000', 'Angular', 'Zurück in die Zukunft', 2),
      new Book('111', 'AngularJS 1.x', 'Oldie but Goldie', 3),
      new Book('222', 'DAs andere Buch', 'Blah')
    ];
    this.reorderBooks();
  }

  ngAfterViewInit() {
    this.bookComponents.forEach((bookComponent: BookComponent) => {
      bookComponent.rated
        .filter(b => b.title === 'Angular')
        .map(b => b.isbn)
        .subscribe((book) => {
          console.log(book);
        });
    });
  }

  ngOnDestroy() {
    this.bookComponents.forEach((bookComponent: BookComponent) => {
      bookComponent.rated.unsubscribe();
    });
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}


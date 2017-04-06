import { Component, OnInit } from '@angular/core';
import { BookComponent } from './../book/book.component';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import { Book } from './../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  add(book: Book) {
    this.books.push(book);
    this.reorderBooks();
  }

  ngOnInit() {
    this.books = [
      new Book('9783864903571',
               'Angular',
               'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript - ab Angular 4', 5),
      new Book('9783864901546',
               'AngularJS',
               'Eine praktische Einführung in das JavaScript-Framework', 3),
      new Book('9783446426825',
               'Die Kunst des klaren Denkens',
               '52 Denkfehler, die Sie besser anderen überlassen')
    ];
    this.reorderBooks();
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}


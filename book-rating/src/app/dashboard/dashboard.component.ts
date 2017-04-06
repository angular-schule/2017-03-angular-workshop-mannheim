import { BookStoreService } from './../shared/book-store.service';
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
  books: Book[] = [];

  constructor(private bs: BookStoreService) {
  }

  add(book: Book) {
    this.books.push(book);
    this.reorderBooks();
  }

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => {
        this.books = books;
        this.reorderBooks();
      });
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}


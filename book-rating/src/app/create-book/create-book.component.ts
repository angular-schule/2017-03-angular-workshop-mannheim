import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book: Book;

  @Output() bookCreated = new EventEmitter<Book>();

  ngOnInit() {
    this.book = Book.empty();
  }

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
  }
}

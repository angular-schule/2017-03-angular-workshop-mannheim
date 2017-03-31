import { Book } from './../shared/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  add(isbn: HTMLFormElement, title: HTMLFormElement, description: HTMLFormElement) {
    this.bookCreated.emit(new Book(isbn.value, title.value, description.value));
    isbn.value = title.value = description.value = '';
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Book } from 'app/shared/book';
import 'rxjs/add/operator/map';

@Injectable()
export class BookStoreService {

  constructor(private http: Http) { }

  getAll(): Observable<Book[]> {

    return this.http
      .get('https://book-monkey2-api.angular-buch.com/books')
      .map(r => r.json())
      .map(rawBookArray => rawBookArray
        .map(rawBook => new Book(
          rawBook.isbn,
          rawBook.title,
          rawBook.description,
          rawBook.rating))
      );
  }
}

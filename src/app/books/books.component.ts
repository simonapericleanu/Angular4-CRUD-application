import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {Book} from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  books= [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
        .subscribe(
            resBookData => this.books = resBookData
        );
  }

}

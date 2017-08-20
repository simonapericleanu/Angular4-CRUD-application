import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
    providers: []
})
export class BookComponent implements OnInit {
    @Input() public book: Book;

    constructor(private bookService: BookService) {
    }

    ngOnInit() {
    }

    public removeBook(book: Book) {
        this.bookService.deleteBook(book);
    }
}

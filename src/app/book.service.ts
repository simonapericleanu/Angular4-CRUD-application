/**
 * Created by simona on 8/18/2017.
 */
import {Injectable} from '@angular/core';
import {Book} from './book';
import {BOOK_DATA} from './book-data'

@Injectable()
export class BookService {
    private bookItems = BOOK_DATA;

    constructor() {
    }

    getBooksFromData(): Book[] {
        return this.bookItems;
    }

    addBook(book: Book) {
        this.bookItems.push(book)
    }

    updateBook(editedBook) {
        const index = this.bookItems.findIndex(book => book.id === editedBook.id);
        if (index !== -1) {
            this.bookItems[index] = editedBook;
        }
    }

    deleteBook(book: Book) {
        this.bookItems.splice(this.bookItems.indexOf(book), 1);
    }
}

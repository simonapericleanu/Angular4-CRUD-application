/**
 * Created by simona on 8/18/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';
import {BOOK_DATA} from './book-data'

@Injectable()
export class BookService {
    private bookItems = BOOK_DATA;
    private _url = '/assets/books.json';

    constructor(private _http: Http) {
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

    // findIndexToUpdate(newItem) {
    //     return newItem.id === this;
    // }
    // showUpdatedItem(newItem){
    //     let updateItem = this.itemArray.items.find(this.findIndexToUpdate, newItem.id));
    //
    //     let index = this.itemArray.items.indexOf(updateItem);
    //
    //
    //     this.itemArray.items[index] = newItem;
    //
    // }

    findIndexToUpdate(newItem) {
        return newItem.id === this;
    }

    // getBooks(): Observable<Book[]> {
    //     return this._http.get(this._url)
    //         .map((response: Response) => response.json());
    // }

    // createBook(book: Book): Observable<Book[]> {
    //     const headers = new Headers({
    //         'Content-Type': 'application/json'
    //     });
    //     console.log(this._url);
    //     return this._http.post(this._url, JSON.stringify(book), book).map(res => res.json());
    // }
}

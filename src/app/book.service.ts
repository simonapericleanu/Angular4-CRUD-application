/**
 * Created by simona on 8/18/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Book} from './book';
@Injectable()
export class BookService {
    private _url = '/assets/books.json';
    constructor (private _http: Http) {
    }
    getBooks(): Observable<Book[]> {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }
}

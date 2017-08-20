/**
 * Created by simona on 8/18/2017.
 */
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Author} from './author';
import { AUTHOR_DATA } from './author-data'

@Injectable()
export class AuthorService {
    private authorItems = AUTHOR_DATA;

    constructor() {
    }

    getAuthorsFromData(): Author[] {
        return this.authorItems;
    }

    addAuthor(author: Author) {
        this.authorItems.push(author);
        console.log(this.authorItems)
    }
}

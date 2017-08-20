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
    }

    updateAuthor(editedAuthor) {
        const index = this.authorItems.findIndex(author => author.id === editedAuthor.id);
        console.log(index, editedAuthor);
        if (index !== -1) {
            this.authorItems[index] = editedAuthor;
        }
    }

    deleteAuthor(author: Author) {
        this.authorItems.splice(this.authorItems.indexOf(author), 1);
    }
}

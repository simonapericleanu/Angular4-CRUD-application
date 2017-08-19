import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book';

@Component({
    selector: 'app-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css'],
    providers: []
})
export class BookComponent implements OnInit {
    @Input() public book: Book;

    constructor() {
    }

    ngOnInit() {
    }
}

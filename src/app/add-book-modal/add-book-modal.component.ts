import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../book';
import {BookService} from '../book.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-add-book-modal',
    templateUrl: './add-book-modal.component.html',
    styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {
    closeResult: string;
    newBook: any = {};
    @Input() public bookArg: Book;

    constructor(private modalService: NgbModal, private bookService: BookService) {
    }

    ngOnInit() {
    }

    public open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    // public addBook(book) {
    //     this.bookService.createBook(book);
    // }

    public onSubmit(f: NgForm) {
        console.log(f);

        this.bookService.addBook(f.value)
            // .subscribe(
            //     () => alert('Admin Created!')
            // );
    }
}

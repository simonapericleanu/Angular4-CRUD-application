import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {BookService} from '../book.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-add-book-modal',
    templateUrl: './add-book-modal.component.html',
    styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {
    modalReference: any;
    closeResult: string;

    constructor(private modalService: NgbModal, private bookService: BookService) {
    }

    ngOnInit() {
    }

    public open(content) {
        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then((result) => {
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

    public onSubmit(f: NgForm) {
        this.bookService.addBook(f.value);
        this.modalReference.close();
    }
}

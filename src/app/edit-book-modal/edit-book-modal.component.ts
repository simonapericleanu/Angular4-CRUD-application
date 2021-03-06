import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../book';
import {NgForm} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
    selector: 'app-edit-book-modal',
    templateUrl: './edit-book-modal.component.html',
    styleUrls: ['./edit-book-modal.component.css']
})
export class EditBookModalComponent implements OnInit {
    modalReference: any;
    closeResult: string;
    editedBook: Book;
    @Input() public book: Book;

    constructor(private modalService: NgbModal, private bookService: BookService) {
    }

    ngOnInit() {
    }


    public open(content) {
        this.editedBook = Object.assign({}, this.book);
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
        this.bookService.updateBook(f.value);
        this.modalReference.close();
    }

}

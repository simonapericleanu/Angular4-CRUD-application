import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../book';

@Component({
    selector: 'app-add-book-modal',
    templateUrl: './add-book-modal.component.html',
    styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {
    closeResult: string;
    @Input() public bookArg: Book;

    constructor(private modalService: NgbModal) {
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
}

import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Author} from '../author';
import {AuthorService} from '../author.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-edit-author-modal',
    templateUrl: './edit-author-modal.component.html',
    styleUrls: ['./edit-author-modal.component.css']
})
export class EditAuthorModalComponent implements OnInit {
    modalReference: any;
    closeResult: string;
    @Input() public author: Author;

    constructor(private modalService: NgbModal, private authorService: AuthorService) {
    }
    ngOnInit(): void {
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
        this.modalReference.close();
    }
}


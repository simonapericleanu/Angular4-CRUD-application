import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Author } from '../author';
import { NgForm } from '@angular/forms';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-edit-author-modal',
  templateUrl: './edit-author-modal.component.html',
  styleUrls: ['./edit-author-modal.component.css']
})
export class EditAuthorModalComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal, private authorService: AuthorService) {
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


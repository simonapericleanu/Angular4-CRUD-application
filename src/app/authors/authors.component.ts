import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../author.service';
import {Author} from '../author';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent implements OnInit {
  closeResult: string;
  authors: Author[];
  constructor(private authorService: AuthorService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    this.authors = this.authorService.getAuthorsFromData()
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

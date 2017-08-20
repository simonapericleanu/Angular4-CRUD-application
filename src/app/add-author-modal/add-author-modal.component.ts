import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AuthorService} from '../author.service';
import {NgForm} from '@angular/forms';
import {Author} from '../author';

@Component({
  selector: 'app-add-author-modal',
  templateUrl: './add-author-modal.component.html',
  styleUrls: ['./add-author-modal.component.css']
})
export class AddAuthorModalComponent implements OnInit {
  closeResult: string;
  @Input() public author: Author;

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

  // public addBook(book) {
  //     this.bookService.createBook(book);
  // }

  public onSubmit(f: NgForm) {
    console.log(f);

    // this.authorService.addAuthor(f.value)
    // .subscribe(
    //     () => alert('Admin Created!')
    // );
  }
}

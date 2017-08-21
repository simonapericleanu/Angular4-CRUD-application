import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import {Book} from '../book';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  closeResult: string;
  books: Book[];
  constructor(private bookService: BookService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getBooks();
    // this.bookService.getBooks()
    //     .subscribe(
    //         resBookData => this.books = resBookData
    //     );
  }

  getBooks() {
    this.books = this.bookService.getBooksFromData()
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

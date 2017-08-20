import { Component, Input, OnInit } from '@angular/core';
import {Author} from '../author';
import {AuthorService} from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() public author: Author;
  constructor(private authorService: AuthorService) { }

  ngOnInit() {
  }
  public removeAuthor(author: Author) {
    this.authorService.deleteAuthor(author);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import {Author} from '../author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  @Input() public author: Author;
  constructor() { }

  ngOnInit() {
  }

}

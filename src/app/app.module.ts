import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import {Http, HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { AddBookModalComponent } from './add-book-modal/add-book-modal.component';
import { EditBookModalComponent } from './edit-book-modal/edit-book-modal.component';

import {BookService} from './book.service';
import { EditAuthorModalComponent } from './edit-author-modal/edit-author-modal.component';
import { AddAuthorModalComponent } from './add-author-modal/add-author-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    HomeComponent,
    BooksComponent,
    AuthorComponent,
    AuthorsComponent,
    AddBookModalComponent,
    EditBookModalComponent,
    EditAuthorModalComponent,
    AddAuthorModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

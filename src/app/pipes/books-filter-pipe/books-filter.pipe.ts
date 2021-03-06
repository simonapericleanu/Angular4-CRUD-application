import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksFilter'
})
export class BooksFilterPipe implements PipeTransform {

  transform(books: any, term: any): any[] {
    if (term === undefined) {
      return books;
    }
    return books.filter(function (book) {
      if (book.title.toLowerCase().includes(term.toLowerCase()) || book.author.toLowerCase().includes(term.toLowerCase())) {
        return true;
      }
    })
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorsFilter'
})
export class AuthorsFilterPipe implements PipeTransform {

  transform(authors: any, term: any): any[] {
    if (term === undefined) {
      return authors;
    }
    return authors.filter(function(author) {
      return author.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}

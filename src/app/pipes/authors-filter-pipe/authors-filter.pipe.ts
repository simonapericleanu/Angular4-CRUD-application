import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'authorsFilter'
})
export class AuthorsFilterPipe implements PipeTransform {

    transform(authors: any, term: string, name: string, nationality: string): any[] {
        if (term === undefined) {
            return authors;
        }
        return authors.filter(function (author) {
            if (author.name.toLowerCase().includes(term.toLowerCase()) || author.nationality.toLowerCase().includes(term.toLowerCase())) {
                return true;
            }
        })
    }
}



import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstChar'
})

export class FirstCharPipe implements PipeTransform {
  transform(surname?:string): string | undefined {
    if(surname != '') {
      return surname?.charAt(0).toUpperCase()
    } else {
      return ''
    }
  }
}

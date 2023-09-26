import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstChar'
})
export class FirstCharPipe implements PipeTransform {

  transform(apellido?:string): string | undefined {
    if(apellido != '') {
      return apellido?.charAt(0).toUpperCase()
    } else {
      return ''
    }
  }

}

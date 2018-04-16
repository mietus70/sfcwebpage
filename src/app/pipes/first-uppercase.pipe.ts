/**
 * Pipe ustawiający pierwszy znak łańcucha na dużą literę.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'firstUppercase'
})
export class FirstUppercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }

}

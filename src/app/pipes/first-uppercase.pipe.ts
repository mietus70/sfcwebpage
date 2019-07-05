/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * This pipe turns first letter into capital letter.
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

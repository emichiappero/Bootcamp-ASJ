import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
})
export class MiPipePipe implements PipeTransform {
  transform(value: any, ...args: any): any {
    if (args != null) {
      if (args == 'ingles') {
        return 'Hello';
      } else if (args == 'italiano') {
        return 'Ciao';
      } else if (args == 'aleman') {
        return 'Hallo';
      } else {
        return value.toUpperCase();
      }
    }
  }
}

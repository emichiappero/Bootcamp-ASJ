import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cuadrado',
})
export class CuadradoPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let fibo = 0;
    let arr = [];
    for (let i = 0; i < value; i++) {
      if (i < 2) {
        arr.push(1);
      } else {
        fibo = arr[i - 2] + arr[i - 1];
        arr.push(fibo);
      }
    }
    return arr.join(' ');
  }
}

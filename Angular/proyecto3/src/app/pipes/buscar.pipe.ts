import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar',
})
export class BuscarPipe implements PipeTransform {
  transform(value: any[], args?: any): any {
    if (args === '' || args === undefined) {
      return value;
    }

    return value.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(args)
    );
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], query: string): any {
    if (query === '' || query === undefined) {
      return value;
    }
    return value.filter((dato) => dato.toLowerCase().indexOf(query) != -1);
  }
}

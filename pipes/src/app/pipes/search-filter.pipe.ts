import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true,
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(values: string[], arg: string): string[] {
    return values.filter(item => item.includes(arg));
  }

}

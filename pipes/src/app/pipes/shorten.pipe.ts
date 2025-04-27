import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten', //pipe name
  standalone: true
})
export class ShortenPipe implements PipeTransform {

  // transform(value: any, ): any {
  //   return value;
  // }

  // transform(value: any, ): any {
  //   if(value.length > 5){
  //     return value.substr(0,5) + "...";
  //   }else{
  //     return value;
  //   }
  // }

  transform(value: any, ...args: any[]): any {
    if (value.length > args[0]) {
      return value.substr(0, args[0]) + "...";
    } else {
      return value;
    }
  }

}

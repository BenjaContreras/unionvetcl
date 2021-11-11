import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sale'
})
export class SalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === true) return 'Si';
    else return 'No';
  }

}

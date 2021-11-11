import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        if (value) return value;
        else return 'Sin stock definido';
    }
}

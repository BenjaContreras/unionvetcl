import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): unknown {
        switch (value) {
            case 1:
                return 'Pendiente';
            case 2:
                return 'Realizada';
            case 3:
                return 'Cancelada';
            default:
                return 'Sin estado';
        }
    }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case 1: return 'Lunes';
      case 2: return 'Martes';
      case 3: return 'Miercoles';
      case 4: return 'Jueves';
      case 5: return 'Viernes';
    }
    return null;
  }

}

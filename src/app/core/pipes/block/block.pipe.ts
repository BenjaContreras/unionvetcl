import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'block'
})
export class BlockPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
        case 1: return '09:30 AM - 10:00 AM';
        case 2: return '10:00 AM - 10:30 AM';
        case 3: return '10:30 AM - 11:00 AM';
        case 4: return '11:00 AM - 11:30 AM';
        case 5: return '11:30 AM - 12:00 PM';
        case 6: return '12:00 PM - 12:30 PM';
        case 7: return '12:30 PM - 13:00 PM';
        case 8: return '15:00 PM - 15:30 PM';
        case 9: return '15:30 PM - 16:00 PM';
        case 10: return '16:00 PM - 16:30 PM';
        case 11: return '16:30 PM - 17:00 PM';
        case 12: return '17:00 PM - 17:30 PM';
        case 13: return '17:30 PM - 18:00 PM';
        case 14: return '18:00 PM - 18:30 PM';
        case 15: return '18:30 PM - 19:00 PM';
        default: return 'Bloque no existente';
    };
  }
}
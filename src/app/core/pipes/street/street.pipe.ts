import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '@models/address.models';

@Pipe({
  name: 'street'
})
export class StreetPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value?.street){    
      let arg: string = args[0] as string;
      if (!arg) return `${value.street}`;
      if (arg.toLowerCase() === 'calle') return `${value.street}`;
      else if (arg.toLowerCase() === 'comuna') return this.capitalize(value.commune);
      else if (arg.toLowerCase() === 'región' || 'region') return `${value.region}`
    };
    if (value === null) return 'Dirección no definida';
    else return value;
  }

  private capitalize(value: string): string {
    if (!value) return value;
    else return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

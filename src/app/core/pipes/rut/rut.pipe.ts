import { Pipe, PipeTransform } from '@angular/core';
import { rutTools } from 'prettyutils';

@Pipe({
  name: 'rut'
})
export class RutPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let rut = (value as any).toString();
    if (rut.length === 7){
      let dV = rutTools.calculateDv(rut);
      let newRut = rut + '-' + dV;
      return rutTools.format(newRut)
    } else return rutTools.format(rut);
  }
}

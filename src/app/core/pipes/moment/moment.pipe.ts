import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
moment.locale('es', {
  months: [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ],
  monthsShort: [
    'En.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ag.o', 'Sept.', 'Oct.', 'Nov.', 'Dic.'
  ],
  weekdays: [
    'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
  ],
  weekdaysShort: [
    'Dom.', 'Lun.', 'Mar.', 'Mie.', 'Jue.', 'Vie.', 'Sab.'
  ]
});

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return moment(value as Date).format('DD MMMM, YYYY');
  }
}
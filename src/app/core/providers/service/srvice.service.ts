import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http/http.service';
import { Service } from '@models/service.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SrviceService {

  constructor(private httpService: HttpService) { }

  public getAllServices(): Observable<Service[]> {
    return this.httpService.get<Service[]>('/service');
  }

  public getServiceById(serviceId: string): Observable<Service>{
    return this.httpService.get<Service>(`/service/${serviceId}`);
  };

  public updateService(serviceId: string, body: any): Observable<Partial<Service>>{
    return this.httpService.put<Service>(`/service/${serviceId}`, body);
  };

  public deleteService(serviceId: string): Observable<Service>{
    return this.httpService.delete<Service>(`/service/${serviceId}`);
  };

  public postService(body: any): Observable<Service>{
    return this.httpService.post<Service>(`/service`, body);
  };

  public async getService(id: string): Promise<Service | null> {
    if (id === 'Cirugias') {
      return {
        id: '1',
        name: 'Cirugias',
        description: [
          '¡No todo se resuelve con medicamentos!',
          'Nuestra clínica cuenta con variados servicios de cirugía, tanto programadas como de emergencia. El procedimiento más frecuente, es la ESTERILIZACIÓN, se realiza a diario en hembras y machos, y es masivamente conocido con el fin de controlar la población animal. Pero lo que muchas veces ignoramos, son los múltiples beneficios que entrega, en donde destaca por lo demás el disminuir el porcentaje de aparición de quistes o TUMORES; problema que, de igual forma, resolvemos de manera quirúrgica en nuestro pabellón.',
          'Sin duda son muchos los problemas que pueden surgir en el cuidado de nuestras mascotas, y los accidentes son algo del día a día. Acá realizamos manejos quirúrgicos básicos que van de curaciones de HERIDAS, hasta otros más complejos como ENTEROTOMIAS o incluso AMPUTACIONES por nombrar algunos. '
        ],
        imagesURL: ['..', '..', '..', '..']
      };
    } else {
      if (id === 'Destartraje') {
        return {
          id: '2',
          name: 'Destartraje',
          description: [
            '¿Quieres que tu mascota tenga una dentadura perfecta? Acá tenemos la solución.',
            'Unos dientes limpios, son el sinónimo de una buena salud bucal. Por eso te orientaremos y guiaremos en los cuidados básicos que necesita.',
            'El DETARTRAJE es una técnica que no solo deja relucientes sus dientes, sino que también ayuda a evitar problemas de SARRO y GINGIVITIS como consecuencia de este. Si la salud bucal de nuestra mascota se ve afectada, la calidad de vida de ellos TAMBIEN. No descuides su higiene dental y tú mascota te lo agradecerá.'
          ],
          imagesURL: ['..', '..', '..', '..']
        };
      } else {
        if (id === 'Aplicación de microchip') {
          return {
            id: '3',
            name: 'Aplicación de microchip',
            description: [
              '¿Te has imaginado perder a tu mascota y poder encontrarla gracias a un simple código? Esto es posible gracias al sistema de identificación y registro de microchips.',
              'Si, tu mascota igual necesita estar registrada. En Chile es obligación que nuestros animales de compañía lleven un sistema de identificación, para lo cual el microchip es la técnica más segura al momento de registrar a nuestro animal.',
              'En los últimos años, muchas mascotas perdidas han sido encontradas y devueltas a sus hogares gracias a este sistema, generando el tan anhelado reencuentro.'
            ],
            imagesURL: ['..', '..', '..', '..']
          };
        } else {
          if (id === 'Controles preventivos') {
            return {
              id: '4',
              name: 'Controles preventivos',
              description: [
                '¡Porque siempre será mejor prevenir que lamentar!',
                'Ciertamente nunca querremos ver a nuestras mascotas enfermas, por eso ofrecemos un variado abanico de opciones para prevenir problemas de salud e ir evaluando el estado de nuestros animales.',
                'Siempre lo principal al momento de prevenir, será la aplicación de vacunas, es por eso que nos enfocamos en entregar un servicio cómodo y personalizado en donde inculcamos el uso y la importancia que estas tienen para prevenir eventuales problemas de salud, llevando a cabo un calendario de vacunación adaptado a las necesidades de cada paciente. Pero no todo se realiza en la consulta, también ofrecemos métodos preventivos contra parásitos externos e internos que pueden ser aplicados tanto  acá, como en la comodidad del hogar, evitando sí la infestación de parásitos y ectoparásitos que puedan haber en el ambiente.'
              ],
              imagesURL: ['..', '..', '..', '..']
            };
          } else {
            if (id === 'Consultas veterinarias') {
              return {
                id: '5',
                name: 'Consultas veterinarias',
                description: [
                  'Siempre trataremos de ofrecer la mejor atención posible, cada problema tendrá una solución.',
                  'Estamos enfocados a tratar las diversas enfermedades de sus mascotas, ocupando manejos integrales tanto en la consulta, como de aplicación casera, facilitando controles de rutina que mantengan un seguimiento de nuestros pacientes, evaluando así su evolución hasta su pronta recuperación.',
                  'Desde un resfrió a un parvovirus, todas sus consultas serán tratadas con la misma atención y dedicación.',
                ],
                imagesURL: ['..', '..', '..', '..']
              };
            } else {
              if (id === 'Farmacia') {
                return {
                  id: '6',
                  name: 'Farmacia',
                  description: [
                    'Una salud integral, va de la mano de tratamientos farmacológicos. Por eso y para su comodidad, contamos en la clínica con variados productos de diferentes laboratorios, destinados a cubrir las diversas necesidades de nuestras mascotas, tanto para sanar como para prevenir.',
                    'Pero no todo es medicamentos. También podrás encontrar diferentes marcas de insumos de estética y belleza que mantendrán a nuestros amigos con el mejor estilo posible.',
                  ],
                  imagesURL: ['..', '..', '..', '..']
                };
              } else return null;
            };
          };
        };
      };
    };
  };
}

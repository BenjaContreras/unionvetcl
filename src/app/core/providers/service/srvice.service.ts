import { Injectable } from '@angular/core';
import { Service } from '@models/service.model';

@Injectable({
  providedIn: 'root'
})
export class SrviceService {

  constructor() { }

  public async getService(id: string): Promise<Service | null> {
    if (id === 'Aplicación de microchip') {
      return {
        id: '1',
        name: 'Aplicacion de microchip',
        content: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus tellus, accumsan vitae lorem vel, consequat tempor neque. Maecenas maximus facilisis finibus. Nunc convallis ante sit amet viverra vulputate. Maecenas eu felis neque. Cras elit libero, aliquet sed ultrices ut, porttitor non nisi. Nam ut rutrum mi, quis laoreet erat. Etiam iaculis tincidunt urna, eu pretium orci. Integer et ex tincidunt, pharetra enim sit amet, dapibus ipsum.',
          'Etiam dignissim mattis nisl, a congue lectus pharetra in. Sed sed est consectetur, convallis nisi ut, lacinia leo. Phasellus urna libero, egestas molestie varius a, lacinia a enim. Aliquam eu leo ultricies, feugiat leo ut, egestas mauris. Pellentesque congue vulputate nibh sagittis varius. Cras lacinia sapien odio, vitae tempus sapien iaculis eu. Sed eget scelerisque orci, in vehicula elit.',
          'Pellentesque vel fringilla mauris. Etiam tempus tincidunt nisi, in cursus odio sodales nec. Suspendisse porttitor felis vel ligula euismod, nec malesuada erat dapibus. In facilisis mattis lectus, eu maximus nunc laoreet sit amet. Vivamus nec lectus justo. Nullam dignissim ultrices felis, sit amet aliquam nibh tincidunt id. Duis vulputate elementum elit sed convallis. Donec finibus tortor sit amet tellus imperdiet placerat. Maecenas consectetur, erat ut hendrerit sodales, justo arcu accumsan sem, sit amet eleifend ligula nibh eget quam. Quisque rhoncus consectetur ligula sit amet elementum. Donec at ipsum nulla. Aenean nisl ipsum, tempus a ultricies id, faucibus eget nibh.'
        ],
        imagesURL: ['..', '..', '..', '..']
      };
    } else {
      return {
        id: '2',
        name: 'Controles preventivos',
        content: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus tellus, accumsan vitae lorem vel, consequat tempor neque. Maecenas maximus facilisis finibus. Nunc convallis ante sit amet viverra vulputate. Maecenas eu felis neque. Cras elit libero, aliquet sed ultrices ut, porttitor non nisi. Nam ut rutrum mi, quis laoreet erat. Etiam iaculis tincidunt urna, eu pretium orci. Integer et ex tincidunt, pharetra enim sit amet, dapibus ipsum.',
          'Etiam dignissim mattis nisl, a congue lectus pharetra in. Sed sed est consectetur, convallis nisi ut, lacinia leo. Phasellus urna libero, egestas molestie varius a, lacinia a enim. Aliquam eu leo ultricies, feugiat leo ut, egestas mauris. Pellentesque congue vulputate nibh sagittis varius. Cras lacinia sapien odio, vitae tempus sapien iaculis eu. Sed eget scelerisque orci, in vehicula elit.',
          'Pellentesque vel fringilla mauris. Etiam tempus tincidunt nisi, in cursus odio sodales nec. Suspendisse porttitor felis vel ligula euismod, nec malesuada erat dapibus. In facilisis mattis lectus, eu maximus nunc laoreet sit amet. Vivamus nec lectus justo. Nullam dignissim ultrices felis, sit amet aliquam nibh tincidunt id. Duis vulputate elementum elit sed convallis. Donec finibus tortor sit amet tellus imperdiet placerat. Maecenas consectetur, erat ut hendrerit sodales, justo arcu accumsan sem, sit amet eleifend ligula nibh eget quam. Quisque rhoncus consectetur ligula sit amet elementum. Donec at ipsum nulla. Aenean nisl ipsum, tempus a ultricies id, faucibus eget nibh.'
        ],
        imagesURL: ['..', '..', '..', '..']
      };
    }
  };
}

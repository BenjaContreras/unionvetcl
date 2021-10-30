import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public hendleRoutes(route: string): string {
    if (route === 'Crear cita') {
      return 'agenda/crear-cita';
    } else if (route === 'Lista de citas') {
      return 'agenda/lista-citas';
    } else if (route === 'Horario') {
      return 'agenda';
    } else if (route === 'Crear usuario') {
      return 'usuarios/crear-usuario';
    } else if (route === 'Verificar usuario') {
      return 'usuarios/verificar-usuario';
    } else if (route === 'Lista de usuarios') {
      return 'usuarios/lista-usuarios';
    } else if (route === 'Actualizar productos') {
      return 'productos/actualizar-productos';
    } else if (route === 'Crear producto') {
      return 'productos/crear-producto';
    } else if (route === 'Lista de productos') {
      return 'productos/lista-productos';
    } else if (route === 'Responder consulta') {
      return 'consultas/responder-consulta';
    } else if (route === 'Lista de consultas') {
      return 'consultas/lista-consultas';
    } else if (route === 'Tips') {
      return 'publicaciones/tips';
    } else if (route === 'Crear tip') {
      return 'publicaciones/tips/crear-tip';
    } else if (route === 'Actualizar tip') {
      return 'publicaciones/tips/actualizar-tip';
    } else if (route === 'Lista de tips') {
      return 'publicaciones/tips/lista-tips';
    } else if (route === 'Redes sociales') {
      return 'publicaciones/redes-sociales';
    } else if (route === 'Crear publicacion') {
      return 'publicaciones/tips/crear-publicacion';
    } else if (route === 'Actualizar publicacion') {
      return 'publicaciones/tips/actualizar-publicacion';
    } else if (route === 'Lista de publicaciones') {
      return 'publicaciones/tips/lista-publicaciones';
    } else if (route === 'Crear oferta') {
      return 'ofertas/crear-oferta';
    } else if (route === 'Lista de ofertas') {
      return 'ofertas/lista-ofertas';
    } else if (route === 'Crear contrato') {
      return 'contratos/crear-contrato';
    } else if (route === 'Lista de contratos') {
      return 'contratos/lista-contratos';
    };
    return '';
  };

  public verifyMail(email: string): {message: string, verify: boolean} {
    this.validMails.forEach(mail => {
      if (!email.includes(mail)) return {
        message: 'El correo es invalido',
        verify: false
      };
      return;
    });
    return {
      message: 'Todo en orden',
      verify: true 
    };
  };

  public verifyName(name: string): {message: string, verify: boolean} {
    this.specialCharacters.forEach(car => {
      if (!name.includes(car)) return {
        message: 'El nombre contiene caracteres invalidos',
        verify: false
      };
      return;
    });
    return {
      message: 'Todo en orden',
      verify: true 
    };
  };

  public verifyMessage(message: string): {message: string, verify: boolean} {
    this.specialCharacters.forEach(car => {
      if (!message.includes(car)) return {
        message: 'El mensaje contiene caracteres invalidos',
        verify: false
      };
      return;
    });
    return {
      message: 'Todo en orden',
      verify: true 
    };
  };

  public verifyRut(rut: string): boolean {
    const rutFormatted: string = rutTools.format(rut); // (123456789) => (12345678-9)
    return rutTools.validate(rutFormatted);
  };

  public verifyPhone(phone: string): boolean { 
    return phoneTools.validate(phone);
  };
}

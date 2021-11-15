import { Injectable } from '@angular/core';
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { Contact } from '@models/contact.model';
import { Product } from '@models/product.model';
import { rutTools, phoneTools } from 'prettyutils'

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  public communes: {name: string, communes: string[]}[] = COMMUNES;
  public blocks: Block[] = BLOCKS;
  public specialCharacters: string[] = SPECIALCHARACTERS;
  public specialCharactersLink: string[] = SPECIALCHARACTERS;
  public validMails: string[] = VALIDMAILS;
  public products: Product[] = PRODUCTS;
  public isAdmin: boolean;
  public recentEditedContacts: Contact[];

  constructor(
    private productP: ProductProviderService
  ) {
    this.isAdmin = true;
    this.recentEditedContacts = [];
  }

  public setEditedContacts(contact: Contact) {
    this.recentEditedContacts.push(contact);
  };

  public refreshEditedContacts() {
    this.recentEditedContacts = [];
  };

  public async getCategories(): Promise<string[]> {
    const result: Product[] = await this.productP.getAllProducts().toPromise();
    let categories: string[] = result.map((product: Product) => product.category);
    categories = categories.filter((category: string, index: number) => categories.indexOf(category) === index);
    categories.unshift('Crear categoria');
    return categories;
  };

  public hendleRoutes(route: string): string {
    if (route === 'Crear cita') {
      return 'agenda/crear-cita';
    } else if (route === 'Lista de citas') {
      return 'agenda/lista-citas';
    } else if (route === 'Horario') {
      return 'agenda';
    } else if (route === 'Crear dueño') {
      return 'usuarios/crear-usuario';
    } else if (route === 'Verificar usuario') {
      return 'usuarios/verificar-usuario';
    } else if (route === 'Lista de dueños') {
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
      return 'publicaciones/rrss';
    } else if (route === 'Subir publicación') {
      return 'publicaciones/rrss/subir-publicacion';
    } else if (route === 'Lista de publicaciones') {
      return 'publicaciones/rrss/lista-publicaciones';
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

  public verifyLink(link: string): {message: string, verify: boolean} {
    this.specialCharactersLink.forEach(car => {
      if (!link.includes(car)) return {
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

export interface Block {
  name: string;
  value: number;
};

const BLOCKS: Block[] = [
  {name: '09:30 - 10:00', value: 1}, 
  {name: '10:00 - 10:30', value: 2}, 
  {name: '10:30 - 11:00', value: 3}, 
  {name: '11:00 - 11:30', value: 4}, 
  {name: '11:30 - 12:00', value: 5},
  {name: '12:00 - 12:30', value: 6},
  {name: '12:30 - 13:00', value: 7},
  {name: '15:00 - 15:30', value: 8},
  {name: '15:30 - 16:00', value: 9},
  {name: '16:00 - 16:30', value: 10},
  {name: '16:30 - 17:00', value: 11},
  {name: '17:00 - 17:30', value: 12},
  {name: '17:30 - 18:00', value: 13},
  {name: '18:00 - 18:30', value: 14},
  {name: '18:30 - 19:00', value: 15},
];

const COMMUNES = [
  { name: 'R. Metropolitana', communes: [
      'Cerrillos', 'Cerro Navia', 'Conchalí', 'El Bosque', 'Estación Central', 'Huechuraba', 'Independencia', 'La Cisterna', 
      'La Florida', 'La Granja', 'La Pintana', 'La Reina', 'Las Condes', 'Lo Barnechea', 'Lo Espejo', 'Lo Prado', 'Macul', 
      'Maipú', 'Ñuñoa', 'Pedro Aguirre Cerda', 'Peñalolén', 'Providencia', 'Pudahuel', 'Quilicura', 'Quinta Normal', 'Recoleta', 
      'Renca', 'San Joaquín', 'San Miguel', 'San Ramón', 'Santiago', 'Vitacura', 'Puente Alto', 'Pirque', 'San José de Maipo',
      'Colina', 'Lampa', 'Til-til', 'San Bernardo', 'Buin', 'Calera de Tango', 'Paine', 'Melipilla', 'Alhué', 'Curacaví', 'María Pinto',
      'San Pedro', 'Talagante', 'El Monte', 'Isla de Maipo', 'Padre Hurtado', 'Peñaflor'
    ]
  },
  { name: 'I. Tarapacá', communes: [
      'Iquique', 'Alto Hospicio', 'Pozo Almonte', 'Camiña', 'Colchane', 'Huara', 'Pica'
    ]
  },
  { name: 'II. Antofagasta', communes: [
      'Antofagasta', 'Mejillones', 'Sierra Gorda', 'Taltal', 'Calama', 'Ollagüe', 'San Pedro de Atacama', 
      'Tocopilla', 'María Elena'
    ]
  },
  { name: 'III. Atacama', communes: [
      'Chañaral', 'Diego de Almagro', 'Caldera', 'Copiapó', 'Tierra Amarilla', 'Alto del Carmen', 'Freirina', 'Huasco', 'Vallenar'
    ]
  },
  { name: 'IV. Coquimbo', communes: [
      'La Serena', 'Coquimbo', 'Andacollo', 'La Higuera', 'Paihuano', 'Vicuña', 'Illapel', 'Canela', 'Los Vilos', 'Salamanca',
      'Ovalle', 'Combarbalá', 'Monte Patria', 'Punitaqui', 'Río Hurtado'
    ]
  },
  { name: 'V. Valparaíso', communes: [
      'Valparaíso', 'Casablanca', 'Concón', 'Juan Fernández', 'Puchuncaví', 'Quintero', 'Viña del Mar', 'Isla de Pascua', 
      'Los Andes', 'Calle larga', 'Rinconada', 'San Esteban', 'La Ligua', 'Cabildo', 'Papudo', 'Petorca', 'Zapallar', 
      'Quillota', 'Quilpue', 'Olmué', 'San Antonio', 'Algarrobo', 'Cartagena', 'El Quisco', 'El Tabo', 'Santo Domingo',
      'Limache', 'Villa Alemana', 'Hijuelas', 'La Calera', 'La Cruz', 'Nogales', 'San Antonio', 'San Felipe', 'Catemu',
      'Llaillay', 'Panquehue', 'Putaendo', 'Santa María'
    ]
  },
  { name: "VI. O'Higgins", communes: [
      'Rancagua', 'Codegua', 'Coinco', 'Coltauco', 'Doñihue', 'Graneros', 'Las Cabras', 'Machalí', 'Malloa', 'Mostazal',
      'San Vicente de Tagua Tagua', 'Olivar', 'Peumo', 'Pichidegua', 'Quinta de Tilcoco', 'Rengo', 'Requínoa', 'Pichilemu',
      'La Estrella', 'Litueche', 'Marchihue', 'Navidad', 'Paredones', 'San Fernando', 'Chépica', 'Chimbarongo', 'Lolol',
      'Nancagua', 'Palmilla', 'Peralillo', 'Placilla', 'Pumanque', 'Santa Cruz'
    ]
  },
  { name: "VII. Del maule", communes: [
      'Cauquenes', 'Chanco', 'Pelluhue', 'Curicó', 'Hualañé', 'Licantén', 'Molina', 'Rauco', 'Romeral', 'Sagrada Familia',
      'Teno', 'Vichuquén', 'Colbún', 'Linares', 'Longaví', 'Parral', 'Retiro', 'San Javier', 'Villa Alegre', 'Yerbas Buenas',
      'Constitución', 'Curepto', 'Empedrado', 'Maule', 'Pelarco', 'Pencahue', 'Río Claro', 'San Clemente', 'San Rafael', 'Talca'
    ]
  },
  { name: "VIII. Del Biobío", communes: [
      'Lebu', 'Arauco', 'Cañete', 'Contulmo', 'Curanilahue', 'Los Álamos', 'Tirúa', 'Los Ángeles', 'Antuco', 'Cabrero',
      'Alto Bío Bío', 'Laja', 'Mulchén', 'Nacimiento', 'Negrete', 'Quilaco', 'Quilleco', 'San Rosendo', 'Santa Bárbara',
      'Tucapel', 'Yumbel', 'Concepción', 'Coronel', 'Chiguayante', 'Florida', 'Hualpén', 'Hualqui', 'Lota', 'Penco',
      'San Pedro de la Paz', 'Santa Juana', 'Talcahuano', 'Tomé'
    ]
  },
  { name: "IX. Araucanía", communes: [
      'Temuco', 'Carahue', 'Cunco', 'Chol Chol', 'Curarrehue', 'Freire', 'Galvarino', 'Gorbea', 'Lautaro', 'Loncoche', 
      'Melipeuco', 'Nueva Imperial', 'Padre las Casas', 'Perquenco', 'Pitrufquén', 'Pucón', 'Saavedra', 'Teodoro Schmidt',
      'Toltén', 'Vilcún', 'Villarrica', 'Angol', 'Collipulli', 'Curacautín', 'Ercilla', 'Lonquimay', 'Los Sauces', 'Lumaco',
      'Purén', 'Renaico', 'Traiguén', 'Victoria'
    ]
  },
  { name: "X. Los Lagos", communes: [
      'Castro', 'Ancud', 'Chonchi', 'Curaco de Vélez', 'Dalcahue', 'Puqueldón', 'Queilén', 'Quellón', 'Quemchi', 'Quinchao',
      'Puerto Montt', 'Calbuco', 'Cochamó', 'Fresia', 'Frutillar', 'Los Muermos', 'Llanquihue', 'Maullín', 'Puerto Varas',
      'Osorno', 'Puero Octay', 'Purranque', 'Puyehue', 'Río Negro', 'San Juan de la Costa', 'San Pablo', 'Chaiten', 'Futaleufú',
      'Hualaihué', 'Palena'
    ]
  },
  { name: "XI. Aysén", communes: [
      'Aysén', 'Cisnes', 'Guaitecas', 'Cochrane', "O'higgins", 'Tortel', 'Chile Chico', 'Río Ibáñez', 'Coyhaique', 'Lago Verde',
    ]
  },
  { name: "XII. Magallanes", communes: [
      'Punta Arenas', 'Laguna Blanca', 'Río Verde', 'San Gregorio', 'Cabo de Hornos', 'Antártica', 'Porvenir', 'Primavera',
      'Timaukel', 'Puerto Natales', 'Torres del Paine'
    ]
  },
  { name: "XIV. Los Ríos", communes: [
      'La Unión', 'Futrono', 'Lago Ranco', 'Río Bueno', 'Validivia', 'Corral', 'Lanco', 'Los Lagos', 'Máfil', 'Mariquina',
      'Paillaco', 'Panguipulli'
    ]
  },
  { name: "XV. Arica y Parinacota", communes: [
      'Arica', 'Camarones', 'Putre', 'General Lagos'
    ]
  },
  { name: "XVI. Ñuble", communes: [
      'Bulnes', 'Chillán', 'Chillán Viejo', 'El Carmen', 'Pemuco', 'Pinto', 'Quillón', 'San Ignacio', 'Yungay', 
      'Quirihue', 'Cobquecura', 'Coelmu', 'Ninhue', 'Portezuelo', 'Ránquil', 'Trehuaco', 'San Carlos', 'San Fabián',
      'San Nicolás', 'Coihueco', 'Ñiquén'
    ]
  },
];

const SPECIALCHARACTERS = [
  '"', "'", '&', '%', '?', '¿', '#', ',', '{', '}', '[', ']', '^', '`', 
  '´', '~', '¡', '!', "$", '/', '(', ")", '=', '¨', '°', '¬', '<', '>', 'script'
];

const SPECIALCHARACTERSLINK = [
  '"', "'", '?', '¿', '#', ',', '{', '}', '[', ']', '^', '`', 
  '´', '¡', '!', "$", '(', ")", '=', '¨', '°', '¬', '<', '>', 'script'
];

const VALIDMAILS = [
  'gmail.com', 'outlook.com', 'hotmail.com', 'icloud.com', 'yahoo.es', 'yahoo.com', 'mail.pucv.cl', 'sansano.usm.cl', 'codefire.cl',
  'alumnos.uv.cl', 'uv.cl', 'pucv.cl', 'usm.cl', 'uai.cl', 'unab.cl'
];

const PRODUCTS = [
  { brand: 'Microsules', name: 'Vermic total', description: 'Antiparasitario interno de uso oral, para perros y gatos', category: 'Antiparasitario', sale: true},
  { brand: 'Bayer', name: 'Drontal cat', description: 'Antiparasitario interno de uso oral, para gatos', category: 'Antiparasitario'},
  { brand: 'Bayer', name: 'Profender: 2,5 a 5 Kg', description: 'Antiparasitario interno de uso tópico (pipeta), para gatos', category: 'Antiparasitario'},
  { brand: 'Bayer', name: 'Profender: 5 Kg+', description: 'Antiparasitario interno de uso tópico (pipeta), para gatos', category: 'Antiparasitario'},
  { brand: 'Dragpharma', name: 'Fiprokill', description: 'Antiparasitario externo de uso tópico (spray), para perros y gatos', category: 'Antiparasitario'},
  { brand: 'Dragpharma', name: 'Fiprokill: Hasta 10 Kg', description: 'Antiparasitario externo de uso tópico (spray), para perros', category: 'Antiparasitario'},
  { brand: 'Dragpharma', name: 'Fiprokill: Hasta 10 a 20 Kg', description: 'Antiparasitario externo de uso tópico (spray), para perros', category: 'Antiparasitario'},
  { brand: 'Dragpharma', name: 'Fiprokill: Hasta 20 a 40 Kg', description: 'Antiparasitario externo de uso tópico (spray), para perros', category: 'Antiparasitario'},
  { brand: 'Dragpharma', name: 'Fiprokill: Hasta 40 a 6 0Kg', description: 'Antiparasitario externo de uso tópico (spray), para perros', category: 'Antiparasitario'},
  { brand: 'Dragpharma', name: 'Fiprodrag gato', description: 'Antiparasitario externo de uso tópico (spray), para gatos', category: 'Antiparasitario'},
  { brand: 'Dragpharma', name: 'Naxpet: 10 Mg', description: 'Antiinflamatorio no esteroidal de uso oral (comprimido), para perros y gatos', category: 'Medicamento'},
  { brand: 'Dragpharma', name: 'Naxpet: 30 Mg', description: 'Antiinflamatorio no esteroidal de uso oral (comprimido), para perros y gatos', category: 'Medicamento'},
  { brand: 'Dragpharma', name: 'Naxpet: Solución oral', description: 'Antiinflamatorio no esteroidal de uso oral (jarabe), para perros y gatos', category: 'Medicamento'},
  { brand: 'Dragpharma', name: 'Apeticat', description: 'Suplemento vitamínico de uso oral (jarabe), para gatos', category: 'Suplemento'},
  { brand: 'Dragpharma', name: 'Doguivit: cachorro', description: 'Suplemento vitamínico de uso oral (jarabe), para perros', category: 'Suplemento'},
  { brand: 'Dragpharma', name: 'Doguivit: adulto', description: 'Suplemento vitamínico de uso oral (jarabe), para perros', category: 'Suplemento'},
  { brand: 'Dragpharma', name: 'Doguivit: senior', description: 'Suplemento vitamínico de uso oral (jarabe), para perros', category: 'Suplemento'},
  { brand: 'Dragpharma', name: 'Inmunopet', description: 'Aditivo inmunoestimulante de uso oral (jarave), para perros y gatos', category: 'Medicamento'},
  { brand: 'Dragpharma', name: 'Papainpet', description: 'Suplemento nutricional de uso oral (comprimido), para perros y gatos', category: 'Suplemento'},
  { brand: 'Dragpharma', name: 'Pacifor', description: 'Tranquilizante de uso oral (gotas), para perros y gatos', category: 'Medicamento'},
  { brand: 'Dragpharma', name: 'Ultrafil plus', description: 'Antibiótico, Antimicótico, Antiinflamatorio y Anti ácaros de uso tópico (solución ótica), para perros y gatos', category: 'Medicamento'},
  { brand: 'Dragpharma', name: 'Doximicion: solución oral', description: 'Antibiótico de uso oral (jarabe), para perros y gatos', category: 'Medicamento'},
  { brand: 'Frontline Labs', name: 'Nexgard: 2 a 4 Kg', description: 'Antiparasitario externo de uso oral (comprimido palatable), para perros', category: 'Antiparasitario'},
  { brand: 'Frontline Labs', name: 'Nexgard: 4,1 a 10 Kg', description: 'Antiparasitario externo de uso oral (comprimido palatable), para perros', category: 'Antiparasitario'},
  { brand: 'Frontline Labs', name: 'Nexgard: 10,1 a 25 Kg', description: 'Antiparasitario externo de uso oral (comprimido palatable), para perros', category: 'Antiparasitario'},
  { brand: 'Frontline Labs', name: 'Nexgard: 25,1 a 50 Kg', description: 'Antiparasitario externo de uso oral (comprimido palatable), para perros', category: 'Antiparasitario'},
  { brand: 'Traper', name: 'Shampoo: gato', description: 'Shampo especial para gatos', category: 'Shampoo'},
  { brand: 'Traper', name: 'Shampoo: pelaje claro', description: 'Shampo especial para perros con pelaje claro, resaltando el color de este', category: 'Shampoo'},
  { brand: 'Traper', name: 'Shampoo: aloe vera', description: 'Shampo especial para perros con loción de aloe vera para brindarles mayor frescura', category: 'Shampoo'},
  { brand: 'Traper', name: 'Shampoo: neutro', description: 'Shampo para que cualquier animal luzca su radiante y bello pelaje', category: 'Shampoo'},
  { brand: 'Traper', name: 'Shampoo: cachorro', description: 'Shampo especial para cachorros, evitando la irritación y malestar en ellos', category: 'Shampoo'},
  { brand: 'Dragpharma', name: 'Sir Dog: pelaje negro', description: 'Shampo especial para aquellos perros con pelaje oscuro', category: 'Shampoo'},
  { brand: 'Dragpharma', name: 'Sir Dog: pelaje blanco', description: 'Shampo especial para aquellos perros con pelaje blanco', category: 'Shampoo'},
  { brand: 'Dragpharma', name: 'Tidy: gato', description: 'Shampo en seco, especial para gatos', category: 'Shampoo'},
  { brand: 'Dragpharma', name: 'Tidy: perro', description: 'Shampo en seco, especial para perros', category: 'Shampoo'},
]
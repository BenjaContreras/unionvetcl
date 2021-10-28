import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {

  public testLength: {brand: string, name: string, description: string, category: string}[];
  @Output() lengthOfProducts: EventEmitter<number>;
  @Output() lengthOfCategories: EventEmitter<{name: string, length: number}[]>;
  @Output() lengthOfBrands: EventEmitter<{name: string, length: number}[]>;
  private categories: {name: string, length: number}[];
  private brands: {name: string, length: number}[];
  public isLoading: boolean;

  constructor() { 
    this.categories = [];
    this.isLoading = true;
    this.brands = [];
    this.testLength = products;
    if (this.testLength) this.isLoading = false;
    this.lengthOfProducts = new EventEmitter<number>();
    this.lengthOfCategories = new EventEmitter<{name: string, length: number}[]>();
    this.lengthOfBrands = new EventEmitter<{name: string, length: number}[]>();
  }

  async ngOnInit(): Promise<void> {
    this.testLength = await products;
    if (this.testLength) this.isLoading = false;
    this.lengthOfProducts.emit(this.testLength.length);
    this.searchByCategory();
    this.searchByBrand();
  }

  private searchByCategory() {
    const categoriesArray: string[] = ['Antiparasitario', 'Medicamento', 'Suplemento', 'Shampoo']
    let categoriesAux: string[] = [];
    categoriesArray.forEach(category => {
      this.testLength.forEach(product => {
        if (product.category === category) {
          categoriesAux.push(category);
        };
      });
      this.categories.push({name: category, length: categoriesAux.length});
      categoriesAux = [];
    });
    this.lengthOfCategories.emit(this.categories);
  };

  private searchByBrand() {
    const categoriesArray: string[] = ['Dragpharma', 'Traper', 'Bayer', 'Frontline Labs', 'Microsules']
    let categoriesAux: string[] = [];
    categoriesArray.forEach(category => {
      this.testLength.forEach(product => {
        if (product.brand === category) {
          categoriesAux.push(category);
        };
      });
      this.brands.push({name: category, length: categoriesAux.length});
      categoriesAux = [];
    });
    this.lengthOfBrands.emit(this.brands);
  };

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    return window.innerWidth;
  }
}

const products: {brand: string, name: string, description: string, category: string}[] = [
  { brand: 'Microsules', name: 'Vermic total', description: 'Antiparasitario interno de uso oral, para perros y gatos', category: 'Antiparasitario'},
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
];
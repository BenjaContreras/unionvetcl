import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'rut', 'address', 'animal', 'fecha'];
  public dataSource: MatTableDataSource<any>;
  public expandedElement: any;
  public contactSelected: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.expandedElement = null;
    this.contactSelected = null;
  }

  ngOnInit(): void {
  }
  
  ngOnChanges() {
    this.paginator._intl.itemsPerPageLabel = 'Contactos a mostrar: ';
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Contactos a mostrar: ';
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };
}

const ELEMENT_DATA: {name: string, rut: string, address: string, animal: string, fecha: string}[] = [
  { name: 'Juan Jose', rut: '20.360.152-9', address: 'Federico Araneda, 1809', animal: 'Kira', fecha: '10 de Junio, 2021'},
  { name: 'Pedro Carcuro', rut: '20.370.152-9', address: 'Federico Estrada, 1839', animal: 'Cuchurrumin', fecha: '10 de Julio, 2018'},
  { name: 'Jose de la Masa', rut: '5.370.522-7', address: 'Eleuterio ramirez, 1839', animal: 'Casper', fecha: '5 de Marzo, 2020'},
  { name: 'Patricio Knopeln', rut: '9.370.365-9', address: 'Eleuterio ramirez, 929', animal: 'Rocky', fecha: '15 de Abril, 2017'},
  { name: 'Eduardo Araneda', rut: '19.002.987-1', address: 'Comercio, 997', animal: 'Bobby', fecha: '14 de Mayo, 2020'},
  { name: 'Joel Lespai', rut: '12.702.982-K', address: 'Pje Alcantara, 95', animal: 'Pedrito', fecha: '30 de Agosto, 2021'},
  { name: 'Guillermo Oporto', rut: '13.123.951-8', address: 'Pje Alcantara, 99', animal: 'Chimuelo', fecha: '4 de Septiembre, 2020'},
  { name: 'Juan Jose', rut: '20.360.152-9', address: 'Federico Araneda, 1809', animal: 'Kira', fecha: '10 de Junio, 2021'},
  { name: 'Pedro Carcuro', rut: '20.370.152-9', address: 'Federico Estrada, 1839', animal: 'Cuchurrumin', fecha: '10 de Julio, 2018'},
  { name: 'Jose de la Masa', rut: '5.370.522-7', address: 'Eleuterio ramirez, 1839', animal: 'Casper', fecha: '5 de Marzo, 2020'},
  { name: 'Patricio Knopeln', rut: '9.370.365-9', address: 'Eleuterio ramirez, 929', animal: 'Rocky', fecha: '15 de Abril, 2017'},
  { name: 'Eduardo Araneda', rut: '19.002.987-1', address: 'Comercio, 997', animal: 'Bobby', fecha: '14 de Mayo, 2020'},
  { name: 'Joel Lespai', rut: '12.702.982-K', address: 'Pje Alcantara, 95', animal: 'Pedrito', fecha: '30 de Agosto, 2021'},
  { name: 'Guillermo Oporto', rut: '13.123.951-8', address: 'Pje Alcantara, 99', animal: 'Chimuelo', fecha: '4 de Septiembre, 2020'},
];
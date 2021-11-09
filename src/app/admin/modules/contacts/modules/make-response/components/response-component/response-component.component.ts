import { ResponseModalComponent } from './../response-modal/response-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'response-component',
  templateUrl: './response-component.component.html',
  styleUrls: ['./response-component.component.sass']
})
export class ResponseComponentComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'rut', 'address', 'animal', 'fecha'];
  public dataSource: MatTableDataSource<any>;
  public expandedElement: any;
  public clicked: boolean;
  public elementSelected: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.expandedElement = null;
    this.clicked = false;
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

  public openModal(element: any) {
    this.clicked = true;
    this.elementSelected = element;
    this.dialog.open(ResponseModalComponent, {
      //
    }).afterClosed().subscribe(result => {
        this.elementSelected = null;
    });
  }
}

const ELEMENT_DATA: {name: string, rut: number, address: string, animal: string, fecha: string}[] = [
  { name: 'Juan Jose', rut: 203601529, address: 'Federico Araneda, 1809', animal: 'Kira', fecha: '10 de Junio, 2021'},
  { name: 'Pedro Carcuro', rut: 203701529, address: 'Federico Estrada, 1839', animal: 'Cuchurrumin', fecha: '10 de Julio, 2018'},
  { name: 'Jose de la Masa', rut: 53705227, address: 'Eleuterio ramirez, 1839', animal: 'Casper', fecha: '5 de Marzo, 2020'},
  { name: 'Patricio Knopeln', rut: 93703659, address: 'Eleuterio ramirez, 929', animal: 'Rocky', fecha: '15 de Abril, 2017'},
  { name: 'Eduardo Araneda', rut: 190029871, address: 'Comercio, 997', animal: 'Bobby', fecha: '14 de Mayo, 2020'},
  { name: 'Joel Lespai', rut: 127029822, address: 'Pje Alcantara, 95', animal: 'Pedrito', fecha: '30 de Agosto, 2021'},
  { name: 'Guillermo Oporto', rut: 131239518, address: 'Pje Alcantara, 99', animal: 'Chimuelo', fecha: '4 de Septiembre, 2020'},
  { name: 'Juan Jose', rut: 203601259, address: 'Federico Araneda, 1809', animal: 'Kira', fecha: '10 de Junio, 2021'},
  { name: 'Pedro Carcuro', rut: 203701529, address: 'Federico Estrada, 1839', animal: 'Cuchurrumin', fecha: '10 de Julio, 2018'},
  { name: 'Jose de la Masa', rut: 53705227, address: 'Eleuterio ramirez, 1839', animal: 'Casper', fecha: '5 de Marzo, 2020'},
  { name: 'Patricio Knopeln', rut: 93703659, address: 'Eleuterio ramirez, 929', animal: 'Rocky', fecha: '15 de Abril, 2017'},
  { name: 'Eduardo Araneda', rut: 190029871, address: 'Comercio, 997', animal: 'Bobby', fecha: '14 de Mayo, 2020'},
  { name: 'Joel Lespai', rut: 12702978, address: 'Pje Alcantara, 95', animal: 'Pedrito', fecha: '30 de Agosto, 2021'},
  { name: 'Guillermo Oporto', rut: 131239518, address: 'Pje Alcantara, 99', animal: 'Chimuelo', fecha: '4 de Septiembre, 2020'},
];
import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VerifyModalComponent } from '../verify-modal/verify-modal.component';

@Component({
  selector: 'verify-component',
  templateUrl: './verify-component.component.html',
  styleUrls: ['./verify-component.component.sass']
})
export class VerifyComponentComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'rut', 'address', 'animal'];
  public dataSource: MatTableDataSource<any>;
  public clicked: boolean;
  public elementSelected: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.clicked = false;
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

  public openModal(element: any) {
    console.log(element);
    this.dialog.open(VerifyModalComponent, {
      width: '1200px',
      height: '550px',
      data: element
    }).afterClosed().subscribe(result => {
      this.elementSelected = null;
    });
    this.clicked = true;
    this.elementSelected = element;
  }
}

const ELEMENT_DATA: {name: string, rut: string, address: string, animal: string}[] = [
  { name: 'Juan Jose', rut: '20.360.152-9', address: 'Federico Araneda, 1809', animal: 'Kira'},
  { name: 'Pedro Carcuro', rut: '20.370.152-9', address: 'Federico Estrada, 1839', animal: 'Cuchurrumin'},
  { name: 'Jose de la Masa', rut: '5.370.522-7', address: 'Eleuterio ramirez, 1839', animal: 'Casper'},
  { name: 'Patricio Knopeln', rut: '9.370.365-9', address: 'Eleuterio ramirez, 929', animal: 'Rocky'},
  { name: 'Eduardo Araneda', rut: '19.002.987-1', address: 'Comercio, 997', animal: 'Bobby'},
  { name: 'Joel Lespai', rut: '12.702.982-K', address: 'Pje Alcantara, 95', animal: 'Pedrito'},
  { name: 'Guillermo Oporto', rut: '13.123.951-8', address: 'Pje Alcantara, 99', animal: 'Chimuelo'},
  { name: 'Juan Jose', rut: '20.360.152-9', address: 'Federico Araneda, 1809', animal: 'Kira'},
  { name: 'Pedro Carcuro', rut: '20.370.152-9', address: 'Federico Estrada, 1839', animal: 'Cuchurrumin'},
  { name: 'Jose de la Masa', rut: '5.370.522-7', address: 'Eleuterio ramirez, 1839', animal: 'Casper'},
  { name: 'Patricio Knopeln', rut: '9.370.365-9', address: 'Eleuterio ramirez, 929', animal: 'Rocky'},
  { name: 'Eduardo Araneda', rut: '19.002.987-1', address: 'Comercio, 997', animal: 'Bobby'},
  { name: 'Joel Lespai', rut: '12.702.982-K', address: 'Pje Alcantara, 95', animal: 'Pedrito'},
  { name: 'Guillermo Oporto', rut: '13.123.951-8', address: 'Pje Alcantara, 99', animal: 'Chimuelo'},
];

import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'brand', 'description', 'stock', 'sale'];
  public dataSource: MatTableDataSource<any>;
  public expandedElement: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.expandedElement = null;
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

}

const ELEMENT_DATA: {name: string, brand: string, description: string, stock: number, sale: boolean }[] = [
  { name: 'Juan Jose', brand: '20.360.152-9', description: 'Federico Araneda, 1809', stock: 10, sale: true },
  { name: 'Pedro Carcuro', brand: '20.370.152-9', description: 'Federico Estrada, 1839', stock: 10, sale: true},
  { name: 'Jose de la Masa', brand: '5.370.522-7', description: 'Eleuterio ramirez, 1839', stock: 10, sale: true},
  { name: 'Patricio Knopeln', brand: '9.370.365-9', description: 'Eleuterio ramirez, 929', stock: 10, sale: true},
  { name: 'Eduardo Araneda', brand: '19.002.987-1', description: 'Comercio, 997', stock: 10, sale: true},
  { name: 'Joel Lespai', brand: '12.702.982-K', description: 'Pje Alcantara, 95', stock: 10, sale: true},
  { name: 'Guillermo Oporto', brand: '13.123.951-8', description: 'Pje Alcantara, 99', stock: 10, sale: true},
  { name: 'Juan Jose', brand: '20.360.152-9', description: 'Federico Araneda, 1809', stock: 10, sale: true },
  { name: 'Pedro Carcuro', brand: '20.370.152-9', description: 'Federico Estrada, 1839', stock: 10, sale: true},
  { name: 'Jose de la Masa', brand: '5.370.522-7', description: 'Eleuterio ramirez, 1839', stock: 10, sale: true},
  { name: 'Patricio Knopeln', brand: '9.370.365-9', description: 'Eleuterio ramirez, 929', stock: 10, sale: true},
  { name: 'Eduardo Araneda', brand: '19.002.987-1', description: 'Comercio, 997', stock: 10, sale: true},
  { name: 'Joel Lespai', brand: '12.702.982-K', description: 'Pje Alcantara, 95', stock: 10, sale: true},
  { name: 'Guillermo Oporto', brand: '13.123.951-8', description: 'Pje Alcantara, 99', stock: 10, sale: true},
];

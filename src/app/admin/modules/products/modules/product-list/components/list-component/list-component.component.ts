import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HelperService } from '@core/services/helper/helper.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'brand', 'category', 'stock', 'sale', 'description'];
  public dataSource: MatTableDataSource<any>;
  public expandedElement: any;
  public productSelected: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private helperService: HelperService
  ) {
    this.dataSource = new MatTableDataSource(this.helperService.products);
    this.expandedElement = null;
    this.productSelected = null;
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.paginator._intl.itemsPerPageLabel = 'Productos a mostrar: ';
    this.dataSource = new MatTableDataSource(this.helperService.products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Productos a mostrar: ';
    this.dataSource = new MatTableDataSource(this.helperService.products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

  public openModal(event: string){
    this.dialog.open(ModalComponent, {
      width: '700px',
      data: {
        appointment: this.productSelected,
        type: event,
      }
    }).afterClosed().subscribe(result => {
      this.productSelected = null;
    });
  }

}
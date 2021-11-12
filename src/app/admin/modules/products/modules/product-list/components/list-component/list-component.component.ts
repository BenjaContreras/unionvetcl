import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { Product } from '@models/product.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit, OnChanges, AfterViewInit {

  public displayedColumns: string[] = ['name', 'brand', 'category', 'stock', 'sale', 'description'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public productSelected: any;
  public products: Product[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private productP: ProductProviderService
  ) {
    this.products = [];
    this.productSelected = null;
  }

  async ngOnInit(): Promise<void> {
    await this.setMatTable();
  }

  private async setMatTable(): Promise<void> {
    const result = await this.productP.getAllProducts().toPromise();
    if (result){
      this.products = result;
      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Productos a mostrar: ';
      this.dataSource.sort = this.sort;
    }
  };

  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Productos a mostrar: ';
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Productos a mostrar: ';
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
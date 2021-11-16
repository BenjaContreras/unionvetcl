import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductProviderService } from '@core/providers/products/product-provider.service';
import { TipProviderService } from '@core/providers/tips/tip-provider.service';
import { Product } from '@models/product.models';
import { Tip } from '@models/tip.models';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tip-list',
  templateUrl: './tip-list.component.html',
  styleUrls: ['./tip-list.component.sass']
})
export class TipListComponent implements OnInit {

  public displayedColumns: string[] = ['title', 'content'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public tipSelected: any;
  public tips: Tip[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private tipP: TipProviderService
  ) {
    this.tips = [];
    this.tipSelected = null;
  }

  async ngOnInit(): Promise<void> {
    await this.setMatTable();
  }

  private async setMatTable(): Promise<void> {
    const result = await this.tipP.getAllTips().toPromise();
    if (result){
      this.tips = result;
      this.dataSource = new MatTableDataSource(this.tips);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Tips a mostrar: ';
    }
  };

  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Tips a mostrar: ';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Tips a mostrar: ';
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

  public openModal(event: string){
    this.dialog.open(ModalComponent, {
      width: '700px',
      data: {
        appointment: this.tipSelected,
        type: event,
      }
    }).afterClosed().subscribe(result => {
      this.tipSelected = null;
    });
  }


}

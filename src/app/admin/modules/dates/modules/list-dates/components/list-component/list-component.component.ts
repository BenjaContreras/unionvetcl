import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatesProviderService } from '@core/providers/dates/dates.service';
import { Appointment, Time } from '@models/date.models';
import { ModalComponent } from '../modal/modal.component';
import * as moment from 'moment';
import { HelperService } from '@core/services/helper/helper.service';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass'],
})
export class ListComponentComponent implements OnInit, OnChanges, AfterViewInit {

  public displayedColumns: string[] = ['name', 'state', 'date', 'time', 'animal'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public expandedElement: any;
  public dateSelected: any;
  public dates: Appointment[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private dateP: DatesProviderService,
    private helper: HelperService,
  ) {
    this.expandedElement = null;
    this.dateSelected = null;
    this.dates = [];
  }

  async ngOnInit(): Promise<void> {
    await this.setMatTable();
  }
  
  private async setMatTable(): Promise<void> {
    const result = await this.dateP.getAllAppointments().toPromise();
    if (result){
      this.dates = result;
      this.dataSource = new MatTableDataSource(this.dates);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Citas a mostrar: ';
    }
  };

  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Citas a mostrar: ';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Citas a mostrar: ';
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

  public openModal(event: string){
    this.dialog.open(ModalComponent, {
      width: '700px',
      data: {
        appointment: this.dateSelected,
        type: event,
      }
    }).afterClosed().subscribe(result => {
      this.dateSelected = null;
      this.setMatTable();
    });
  }

  public setDate(date: Time) {
    return new Date(date?.year, date?.month, date?.day);
  }

  public getTime(block: number) {
    let blocks = this.helper.blocks;
    return blocks.find(blockAux => blockAux.value === block)?.name;
  };
}
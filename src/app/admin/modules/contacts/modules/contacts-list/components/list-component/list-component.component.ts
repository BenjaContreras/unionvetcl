import { Component, Input, OnChanges, OnInit, ViewChild, AfterViewInit, AfterContentChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactProviderService } from '@core/providers/contacts/contact-provider.service';
import { Contact } from '@models/contact.model';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit, OnChanges, AfterViewInit {

  public displayedColumns: string[] = ['fullName', 'email', 'phone', 'date', 'message'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public contactSelected: any;
  public contacts: Contact[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private contactP: ContactProviderService
  ) {
    this.contacts = [];
    this.contactSelected = null;
  }

  async ngOnInit(): Promise<void> {
    await this.setMatTable();
  }

  private async setMatTable(): Promise<void> {
    const result = await this.contactP.getAllContacts().toPromise();
    if (result){
      this.contacts = result;
      this.dataSource = new MatTableDataSource(this.contacts);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Contactos a mostrar: ';
      this.dataSource.sort = this.sort;
    }
  };

  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Contactos a mostrar: ';
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Contactos a mostrar: ';
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
        appointment: this.contactSelected,
        type: event,
      }
    }).afterClosed().subscribe(result => {
      this.contactSelected = null;
    });
  }
}
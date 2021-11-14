import { ResponseModalComponent } from './../response-modal/response-modal.component';
import { AfterViewInit, Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '@models/contact.model';
import { ContactProviderService } from '@core/providers/contacts/contact-provider.service';
import { HelperService } from '@core/services/helper/helper.service';

@Component({
  selector: 'response-component',
  templateUrl: './response-component.component.html',
  styleUrls: ['./response-component.component.sass']
})
export class ResponseComponentComponent implements OnInit, AfterViewInit, OnChanges {

  public displayedColumns: string[] = ['fullName', 'email', 'phone', 'date', 'message'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public clicked: boolean;
  public contactSelected: Contact | null;
  public contacts: Contact[];
  public existsPendingContacts: boolean;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private contactP: ContactProviderService,
    private helper: HelperService
  ) {
    this.contactSelected = null;
    this.clicked = false;
    this.contacts = [];
    this.existsPendingContacts = true;
  }

  async ngOnInit(): Promise<void> {
    await this.setMatTable();
  }

  private async setMatTable(): Promise<void> {
    const result = await this.contactP.getAllContacts().toPromise();
    if (result){
      this.contacts = result.filter(contact => contact.isReaded === false);
      if (this.contacts.length === 0) this.existsPendingContacts = false;
      this.dataSource = new MatTableDataSource(this.contacts);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Contactos a mostrar: ';
    }
  };

  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Contactos a mostrar: ';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Contactos a mostrar: ';
  }

  public openModal(element: any) {
    this.clicked = true;
    this.contactSelected = element;
    this.dialog.open(ResponseModalComponent, {
      width: '600px',
      data: {
        contact: this.contactSelected
      }
    }).afterClosed().subscribe(result => {
        this.contactSelected = null;
        this.setMatTable();
    });
  }
}
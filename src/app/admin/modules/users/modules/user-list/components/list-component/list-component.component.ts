import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserProviderService } from '@core/providers/user/user-provider.service';
import { User } from '@models/user.models';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.sass']
})
export class ListComponentComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'rut', 'address', 'animal'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public expandedElement: any;
  public userSelected: User | null;
  public users: User[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private userP: UserProviderService
  ) {
    this.expandedElement = null;
    this.userSelected = null;
    this.users = [];
  }

  async ngOnInit(): Promise<void> {
    await this.setMatTable();
  }

  private async setMatTable(): Promise<void> {
    const result = await this.userP.getAllUsers().toPromise();
    if (result){
      this.users = result;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
    }
  };

  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Usuarios a mostrar: ';
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

  public openModal(event: string) {
    this.dialog.open(ModalComponent, {
      width: '700px',
      data: {
        user: this.userSelected,
        type: event,
      }
    }).afterClosed().subscribe(result => {
      this.userSelected = null;
      this.setMatTable();
    });
  }

}

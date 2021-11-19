import { AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserProviderService } from '@core/providers/user/user-provider.service';
import { HelperService } from '@core/services/helper/helper.service';
import { User } from '@models/user.models';
import { VerifyModalComponent } from '../verify-modal/verify-modal.component';

@Component({
  selector: 'verify-component',
  templateUrl: './verify-component.component.html',
  styleUrls: ['./verify-component.component.sass']
})
export class VerifyComponentComponent implements OnInit, OnChanges, AfterViewInit {

  public displayedColumns: string[] = ['name', 'rut', 'address', 'animal'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public clicked: boolean;
  public elementSelected: User | null;
  public users: User[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private herlper: HelperService,
    private userP: UserProviderService
  ) {
    this.clicked = false;
    this.users = [];
    this.elementSelected = null;
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

  public openModal(element: any) {
    console.log(element);
    this.dialog.open(VerifyModalComponent, {
      width: '1200px',
      height: '550px',
      data: {
        user: element
      }
    }).afterClosed().subscribe(result => {
      this.elementSelected = null;
      this.setMatTable();
    });
    this.clicked = true;
  }
}

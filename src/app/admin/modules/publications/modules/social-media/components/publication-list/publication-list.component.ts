import { Publication } from '@models/publication.models';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PublicationProviderService } from '@core/providers/publications/publication-provider.service';
import { ModalComponentComponent } from '../modal-component/modal-component.component';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PublicationListComponent implements OnInit {

  public displayedColumns: string[] = ['url', 'actions', 'description'];
  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public publicationSelected: any;
  public publications: Publication[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private publicationP: PublicationProviderService
  ) {
    this.publications = [];
    this.publicationSelected = null;
  }

  async ngOnInit(): Promise<void> {
    await this.setMatTable();
  }

  private async setMatTable(): Promise<void> {
    const result = await this.publicationP.getAllPublications().toPromise();
    if (result){
      this.publications = result;
      this.dataSource = new MatTableDataSource(this.publications);
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Publicaciones a mostrar: ';
    }
  };

  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Publicaciones a mostrar: ';
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Publicaciones a mostrar: ';
  }

  onKey(event: Event){
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue?.trim().toLowerCase();
  };

  public openModal(event: string, publication: Publication): void {
    this.publicationSelected = publication;
    this.dialog.open(ModalComponentComponent, {
      width: event === 'delete' ? '900px' : '700px',
      data: {
        publication: this.publicationSelected,
        type: event,
      }
    }).afterClosed().subscribe(result => {
      this.publicationSelected = null;
      this.setMatTable();
    });
  }

  public cleanUrl(url: string): string {
    let urlAux: any = url.split('/');
    return `${urlAux[0]}//${urlAux[2]}/${urlAux[3]}/${urlAux[4]}`;
  };
}
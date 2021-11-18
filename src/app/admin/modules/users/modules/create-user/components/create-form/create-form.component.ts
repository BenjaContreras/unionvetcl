import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { UserProviderService } from '@core/providers/user/user-provider.service';
import { User } from '@models/user.models';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.sass']
})
export class CreateFormComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  public selectedClient: User | null;
  public selectedClientLocal: User | null;
  public isOutput: boolean;
  public users: User[];

  public ownerFrmCtrl: FormControl = new FormControl(null);
  public ownerFrmFilterCtrl: FormControl = new FormControl(null);
  public filteredUsers: ReplaySubject<User[]> = new ReplaySubject<User[]>(1);
  protected onDestroy = new Subject<void>();

  @ViewChild('singleSelect') singleSelect!: MatSelect;

  constructor(private userP: UserProviderService) {
    this.isOutput = false;
    this.selectedClient = null;
    this.selectedClientLocal = null;
    this.users = [];
  }

  async ngOnInit(): Promise<void> {
    this.users = await this.userP.getAllUsers().toPromise();
    this.ownerFrmCtrl.setValue(null);
    this.filteredUsers.next(this.users.slice());
    this.ownerFrmFilterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterUsers();
      });
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  };

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.isOutput) {
      await this.ngOnInit();
    }
  }

  protected setInitialValue(): void {
    this.filteredUsers
    .pipe(take(1), takeUntil(this.onDestroy)).subscribe(() => {
      this.singleSelect.compareWith = (a: any, b: any) => a && b && a === b;
    });
  };

  protected filterUsers(): void {
    if (!this.users) return;
    let search = this.ownerFrmFilterCtrl.value;
    if (!search) {
      this.filteredUsers.next(this.users.slice());
      return;
    } else search = search.toLowerCase();
    this.filteredUsers.next(
      this.users.filter(user => (user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search) || user.rut.toLowerCase().includes(search)))
    );
  };

  public confirmClient(): User | null {
      return this.isOutput ? (this.selectedClient ? this.selectedClient : null) : (this.selectedClientLocal ? this.selectedClientLocal : null);
  };

  public setSelectedClient(client: any): void {
    this.selectedClientLocal = client.value;
  };

  public emitterReciver(event: any): void {
    this.selectedClient = event;
  };

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  };
}

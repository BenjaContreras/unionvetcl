import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
export class CreateFormComponent implements OnInit, AfterViewInit {

  public selectedClient: any;
  public users: User[];
  public userFrmCtrl: FormControl = new FormControl(null);
  public userFrmFilterCtrl: FormControl = new FormControl(null);
  public filteredUsers: ReplaySubject<User[]> = new ReplaySubject<User[]>(1);
  protected onDestroy = new Subject<void>();

  @ViewChild('singleSelect') singleSelect!: MatSelect;

  constructor(
    private fb: FormBuilder,
    private userP: UserProviderService
  ) { 
    this.selectedClient = null;
    this.users = [];
  }

  async ngOnInit(): Promise<void> {
    this.users = await this.userP.getAllUsers().toPromise();
    this.userFrmCtrl.setValue(null);
    this.filteredUsers.next(this.users.slice());
    this.userFrmFilterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterUsers();
      });
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  };

  protected setInitialValue(): void {
    this.filteredUsers
    .pipe(take(1), takeUntil(this.onDestroy)).subscribe(() => {
      this.singleSelect.compareWith = (a: any, b: any) => a && b && a === b;
    });
  };

  protected filterUsers(): void {
    if (!this.users) return;
    let search = this.userFrmFilterCtrl.value;
    if (!search) {
      this.filteredUsers.next(this.users.slice());
      return;
    } else search = search.toLowerCase();
    this.filteredUsers.next(
      this.users.filter(user => (user.firstName.toLowerCase().includes(search) || user.lastName.toLowerCase().includes(search)))
    );
  };

  public setSelectedClient(client: any): void {
    this.selectedClient = client;
  };

  public emitterReciver(event: any): void {
    this.selectedClient = event;
    this.userFrmCtrl.setValue(this.selectedClient);
  };
}

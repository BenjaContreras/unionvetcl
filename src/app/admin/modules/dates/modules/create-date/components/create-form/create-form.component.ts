import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.sass']
})
export class CreateFormComponent implements OnInit, AfterViewInit {

  public selectedClient: any;
  public clients: any[];
  public userFrmCtrl: FormControl = new FormControl(null);
  public userFrmFilterCtrl: FormControl = new FormControl(null);
  public filteredUsers: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  protected onDestroy = new Subject<void>();

  @ViewChild('singleSelect') singleSelect!: MatSelect;

  constructor(private fb: FormBuilder) { 
    this.selectedClient = null;
    this.clients = ['Jose', 'Pedro', 'Juan', 'Roberto', 'Alexis'];
  }

  ngOnInit(): void {
    this.userFrmCtrl.setValue(this.selectedClient);
    this.filteredUsers.next(this.clients.slice());
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
    if (!this.clients) return;
    let search = this.userFrmFilterCtrl.value;
    if (!search) {
      this.filteredUsers.next(this.clients.slice());
      return;
    } else search = search.toLowerCase();
    this.filteredUsers.next(
      this.clients.filter(client => client.toLowerCase().includes(search))
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

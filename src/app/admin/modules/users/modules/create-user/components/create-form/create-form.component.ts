import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { User } from '@models/user.models';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.sass']
})
export class CreateFormComponent implements OnInit, OnDestroy, AfterViewInit {

  public selectedClient: any;
  public clients: any[];
  public ownerFrmCtrl: FormControl = new FormControl(null);
  public ownerFrmFilterCtrl: FormControl = new FormControl(null);
  public filteredClients: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);
  protected onDestroy = new Subject<void>();

  @ViewChild('singleSelect') singleSelect!: MatSelect;

  constructor() {
    this.selectedClient = null;
    this.clients = ['Jose', 'Pedro', 'Juan', 'Roberto', 'Alexis'];
  }

  ngOnInit(): void {
    this.ownerFrmCtrl.setValue(this.selectedClient);
    this.filteredClients.next(this.clients.slice());
    this.ownerFrmFilterCtrl.valueChanges
      .pipe(takeUntil(this.onDestroy))
      .subscribe(() => {
        this.filterClients();
      });
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  };

  protected setInitialValue(): void {
    this.filteredClients
    .pipe(take(1), takeUntil(this.onDestroy)).subscribe(() => {
      this.singleSelect.compareWith = (a: any, b: any) => a && b && a === b;
    });
  };

  protected filterClients(): void {
    if (!this.clients) return;
    let search = this.ownerFrmFilterCtrl.value;
    if (!search) {
      this.filteredClients.next(this.clients.slice());
      return;
    } else search = search.toLowerCase();
    this.filteredClients.next(
      this.clients.filter(client => client.toLowerCase().includes(search))
    );
  };


  public setSelectedClient(client: any): void {
    this.selectedClient = client.value;
  };

  public emitterReciver(event: any): void {
    this.selectedClient = event;
    this.ownerFrmCtrl.setValue(this.selectedClient);
  };

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.complete();
  };
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.sass']
})
export class CreateFormComponent implements OnInit {

  public clientSelectionForm: FormGroup;
  public selectedClient: any;
  public clients: any[];

  constructor(private fb: FormBuilder) { 
    this.clientSelectionForm = this.fb.group({
      client: [null, Validators.required],
    });
    this.selectedClient = null;
    this.clients = ['Jose', 'Pedro', 'Juan', 'Roberto', 'Alexis'];
  }

  ngOnInit(): void {
  }

  public setSelectedClient(client: any): void {
    this.selectedClient = client;
  };

  public emitterReciver(event: any): void {
    for(let data in this.clientSelectionForm.controls) {
      (<FormControl>this.clientSelectionForm.controls[data]).setValue(null);
      this.clientSelectionForm.controls[data].setErrors(null);
    };
    this.selectedClient = event;
  };
}

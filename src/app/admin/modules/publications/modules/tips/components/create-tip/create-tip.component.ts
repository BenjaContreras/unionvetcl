import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TipProviderService } from '@core/providers/tips/tip-provider.service';
import { NotificationService } from '@core/services/notification/notification.service';
import { Tip } from '@models/tip.models';

@Component({
  selector: 'app-create-tip',
  templateUrl: './create-tip.component.html',
  styleUrls: ['./create-tip.component.sass']
})
export class CreateTipComponent implements OnInit {

  client: any;
  public createTipForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private tipProvider: TipProviderService,
  ) {
    this.isLoading = false;
    this.createTipForm = this.fb.group({
      imageUrl: ["", Validators.required],
      content: ["", Validators.required],
      title: ["", Validators.required],
    });
  }

  public cleanForm(){
    for(let data in this.createTipForm.controls) {
      (<FormControl>this.createTipForm.controls[data]).setValue(null);
      this.createTipForm.controls[data].setErrors(null);
    };
  };

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  get imageUrl(): string { return this.createTipForm.get('imageUrl')?.value };
  get content(): string { return this.createTipForm.get('content')?.value };
  get title(): string { return this.createTipForm.get('title')?.value };

  async onSubmit(): Promise<any> {
    if (this.createTipForm.valid){
      let newTip: Tip = {
        imageUrl: this.imageUrl,
        content: this.content,
        title: this.title,
      };
      try {
        this.isLoading = true;
        const result = await this.tipProvider.postTip(newTip).toPromise();
        if (result) this.isLoading = false;
        this.notificationService.success(`Se ha creado el tip con exito!`);
        this.cleanForm();
      } catch (e) {
        console.log(e);
        this.notificationService.error('No se pudo realizar tu solicitud, intente otra vez');
      }
    };
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {

  }

}

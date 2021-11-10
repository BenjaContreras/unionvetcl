import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './services/http/http.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const services = [
  HttpService,
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [...services]
})
export class CoreModule { }

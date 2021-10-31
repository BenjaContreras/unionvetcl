import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsRoutingModule } from './tips-routing.module';
import { RedirectScreenComponent } from './screens/redirect-screen/redirect-screen.component';
import { RedirectComponentComponent } from './components/redirect-component/redirect-component.component';
import { TipScreenComponent } from './screens/tip-screen/tip-screen.component';
import { TipComponentComponent } from './components/tip-component/tip-component.component';



@NgModule({
  declarations: [
    RedirectScreenComponent,
    RedirectComponentComponent,
    TipScreenComponent,
    TipComponentComponent
  ],
  imports: [
    CommonModule,
    TipsRoutingModule
  ]
})
export class TipsModule { }

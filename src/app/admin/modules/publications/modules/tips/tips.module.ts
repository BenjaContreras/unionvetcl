import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipsRoutingModule } from './tips-routing.module';
import { RedirectScreenComponent } from './screens/redirect-screen/redirect-screen.component';
import { RedirectComponentComponent } from './components/redirect-component/redirect-component.component';
import { TipScreenComponent } from './screens/tip-screen/tip-screen.component';
import { CreateTipComponent } from './components/create-tip/create-tip.component';
import { UpdateTipComponent } from './components/update-tip/update-tip.component';
import { TipListComponent } from './components/tip-list/tip-list.component';
import { MaterialModule } from '@core/material.module';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    RedirectScreenComponent,
    RedirectComponentComponent,
    TipScreenComponent,
    CreateTipComponent,
    UpdateTipComponent,
    TipListComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    TipsRoutingModule,
    MaterialModule
  ]
})
export class TipsModule { }

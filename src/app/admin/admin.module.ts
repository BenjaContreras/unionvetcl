import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AdminHomeScreenComponent } from './screens/admin-home-screen/admin-home-screen.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '@core/material.module';
import { AuthProviderService } from '@core/providers/auth/auth-provider.service';

const components: any = [
  AdminHomeScreenComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    LayoutModule,
    MaterialModule
  ]
})
export class AdminModule { }

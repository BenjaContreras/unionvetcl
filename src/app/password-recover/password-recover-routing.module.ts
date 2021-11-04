import { DataInputScreenComponent } from './screens/data-input/data-input.component';
import { RecoverScreenComponent } from './screens/recover-screen/recover-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGuard } from '@core/guards/token/token.guard';

const routes: Routes = [
  {path: 'olvide-contrasenia', component: DataInputScreenComponent, pathMatch: 'full'},
  {
    path: 'recuperar-clave/:token',
    canActivate: [TokenGuard],
    component: RecoverScreenComponent,
  },
  {path: '**', component: DataInputScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRecoverRoutingModule { }

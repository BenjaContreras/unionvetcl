import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectScreenComponent } from './screens/redirect-screen/redirect-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RedirectScreenComponent,
        pathMatch: 'full'
      },
      {
        path: 'tips',
        loadChildren: () => import('./modules/tips/tips.module')
          .then(tM => tM.TipsModule)
      },
      {
        path: 'redes-sociales',
        loadChildren: () => import('./modules/social-media/social-media.module')
          .then(rsM => rsM.SocialMediaModule)
      }
    ]
  },
  { path: '**', component: RedirectScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }

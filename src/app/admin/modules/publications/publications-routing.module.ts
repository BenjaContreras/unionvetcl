import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tips',
    loadChildren: () => import('./modules/tips/tips.module')
      .then(tM => tM.TipsModule)
  },
  {
    path: 'redes-sociales',
    loadChildren: () => import('./modules/social-media/social-media.module')
      .then(rsM => rsM.SocialMediaModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationsRoutingModule { }

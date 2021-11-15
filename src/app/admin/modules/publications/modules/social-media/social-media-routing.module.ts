import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RedirectScreenComponent } from './screens/redirect-screen/redirect-screen.component';
import { SocialMediaScreenComponent } from './screens/social-media-screen/social-media-screen.component';

const routes: Routes = [
  { path: '', component: RedirectScreenComponent, pathMatch: 'full' },
  { path: 'lista-publicaciones', component: SocialMediaScreenComponent},
  { path: '**', component: RedirectScreenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }

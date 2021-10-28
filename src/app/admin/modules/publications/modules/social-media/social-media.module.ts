import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaRoutingModule } from './social-media-routing.module';
import { RedirectScreenComponent } from './screens/redirect-screen/redirect-screen.component';
import { SocialMediaScreenComponent } from './screens/social-media-screen/social-media-screen.component';
import { SocialMediaComponentComponent } from './components/social-media-component/social-media-component.component';
import { RedirectComponentComponent } from './components/redirect-component/redirect-component.component';



@NgModule({
  declarations: [
    RedirectScreenComponent,
    SocialMediaScreenComponent,
    SocialMediaComponentComponent,
    RedirectComponentComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ]
})
export class SocialMediaModule { }

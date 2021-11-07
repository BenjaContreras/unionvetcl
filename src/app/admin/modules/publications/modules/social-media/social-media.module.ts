import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialMediaRoutingModule } from './social-media-routing.module';
import { RedirectScreenComponent } from './screens/redirect-screen/redirect-screen.component';
import { SocialMediaScreenComponent } from './screens/social-media-screen/social-media-screen.component';
import { RedirectComponentComponent } from './components/redirect-component/redirect-component.component';
import { MaterialModule } from '@core/material.module';
import { UploadPublicationComponent } from './components/upload-publication/upload-publication.component';
import { PublicationListComponent } from './components/publication-list/publication-list.component';



@NgModule({
  declarations: [
    RedirectScreenComponent,
    SocialMediaScreenComponent,
    RedirectComponentComponent,
    UploadPublicationComponent,
    PublicationListComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    MaterialModule
  ]
})
export class SocialMediaModule { }

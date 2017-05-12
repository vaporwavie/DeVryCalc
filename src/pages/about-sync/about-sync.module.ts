import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutSyncPage } from './about-sync';

@NgModule({
  declarations: [
    AboutSyncPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutSyncPage),
  ],
  exports: [
    AboutSyncPage
  ]
})
export class AboutSyncPageModule {}

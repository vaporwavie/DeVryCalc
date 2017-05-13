import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyncPage } from './sync';

@NgModule({
  declarations: [
    SyncPage,
  ],
  imports: [
    IonicPageModule.forChild(SyncPage),
  ],
  exports: [
    SyncPage
  ]
})
export class SyncPageModule {}

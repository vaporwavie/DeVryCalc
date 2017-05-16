import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectPage } from './connect';

@NgModule({
  declarations: [
    ConnectPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectPage),
  ],
  exports: [
    ConnectPage
  ]
})
export class ConnectPageModule {}

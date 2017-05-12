import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController, NavParams, ToastController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the SyncPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-sync',
  templateUrl: 'sync.html',
})
export class SyncPage {

  constructor (
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private navParams: NavParams,
  ) {
    // nothing to see here
  }

  sync() {
    let alert = this.alertCtrl.create({
      title: 'Sincronizar notas',
      message: 'Essa funcionalidade ainda está sendo testada. O Academus é muito instável, e dependemos dele para sincronizar suas notas.',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Prosseguir mesmo assim',
          handler: () => {
            console.log("Needs some work");
          }
        }
      ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncPage');
  }

}

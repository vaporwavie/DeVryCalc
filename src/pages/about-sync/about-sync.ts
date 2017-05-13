import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AlertController, NavController, NavParams, ToastController, ModalController, ViewController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the AboutSyncPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about-sync',
  templateUrl: 'about-sync.html',
})
export class AboutSyncPage {

  constructor (
    private modalCtrl: ModalController,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private formBuilder: FormBuilder,
    private navParams: NavParams,
  ) {}

  closeModal() {
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutSyncPage');
  }

}

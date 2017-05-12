import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  ) {}

  academusConnect() {
    console.log("Should connect to Academus");
    // This will trigger the **future** Academus Java Scraping plugin
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SyncPage');
  }
}

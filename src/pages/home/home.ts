import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController, AlertController } from 'ionic-angular';
import { DisciplinaModel } from './../../models/disciplina.model';
import { Notas } from '../../providers/notas';
import { Disciplinas } from './../../providers/disciplinas';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  disciplinas: Array<DisciplinaModel> = [ ]

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private alertCtrl: AlertController,
    public disciplinasService: Disciplinas,
    public notas: Notas
  ) {}

  openMenu(event: MouseEvent) {
    let popover = this.popoverCtrl.create('MenuPage');
    popover.present({
      ev: event
    });
  }

  ionViewDidEnter() {
    this.load();
  }

  load(): Promise<any> {
    return this.disciplinasService.list()
      .then((disciplinas: Array<DisciplinaModel>) => this.disciplinas = disciplinas);
  }

  edit(disciplina) {
    this.navCtrl.push('DisciplinaPage', {disciplina});
  }

  create() {
    this.navCtrl.push('DisciplinaPage');
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
            this.navCtrl.push('SyncPage');
            console.log("Needs work");
          }
        }
      ]
    });
    alert.present();
  }

}

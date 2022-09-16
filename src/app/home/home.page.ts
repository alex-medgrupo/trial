import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AreaRepository } from '../repositories/area';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private repo: AreaRepository, private navCtrl: NavController) {}

  clickHandle() {
    this.navCtrl.navigateForward('/dados-pessoais');
  }
}

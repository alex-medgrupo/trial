import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-seus-estudos',
  templateUrl: './seus-estudos.page.html',
  styleUrls: ['./seus-estudos.page.scss'],
})
export class SeusEstudosPage implements OnInit {
  constructor(private navController: NavController) {}

  ngOnInit() {}

  goBack() {
    this.navController.navigateBack(['dados-pessoais']);
  }

  continue() {
    this.navController.navigateForward(['conclusao']);
  }
}

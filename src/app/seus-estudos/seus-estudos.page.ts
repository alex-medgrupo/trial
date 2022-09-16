import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Faculdade, FaculdadeRepository } from '../repositories/faculdade';

@Component({
  selector: 'app-seus-estudos',
  templateUrl: './seus-estudos.page.html',
  styleUrls: ['./seus-estudos.page.scss'],
})
export class SeusEstudosPage implements OnInit {
  faculdades: Faculdade[] = [];

  constructor(
    private navController: NavController,
    private faculdadeRepo: FaculdadeRepository
  ) {}

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    Promise.all([this.fetchFaculdades()]);
  }

  async fetchFaculdades() {
    this.faculdades = await this.faculdadeRepo.getAll();
  }

  goBack() {
    this.navController.navigateBack(['dados-pessoais']);
  }

  continue() {
    this.navController.navigateForward(['conclusao']);
  }
}

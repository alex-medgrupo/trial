import { Component, OnInit, TrackByFunction } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Area, AreaRepository } from '../repositories/area';
import { Concurso, ConcursoRepository } from '../repositories/concurso';
import {
  Especialidade,
  EspecialidadeRepository,
} from '../repositories/especialidade';
import { Faculdade, FaculdadeRepository } from '../repositories/faculdade';
import { Graduacao, GraduacaoRepository } from '../repositories/graduacao';

@Component({
  selector: 'app-seus-estudos',
  templateUrl: './seus-estudos.page.html',
  styleUrls: ['./seus-estudos.page.scss'],
})
export class SeusEstudosPage implements OnInit {
  faculdades: Faculdade[] = [];
  areas: Area[] = [];
  concursos: Concurso[] = [];
  especialidades: Especialidade[] = [];
  graduacoes: Graduacao[] = [];

  constructor(
    private navController: NavController,
    private faculdadeRepo: FaculdadeRepository,
    private areaRepo: AreaRepository,
    private concursoRepo: ConcursoRepository,
    private especialidadeRepo: EspecialidadeRepository,
    private graduacaoRepo: GraduacaoRepository
  ) {}

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    Promise.all([
      this.loadFaculdades(),
      this.loadAreasInteresse(),
      this.loadConcursos(),
      this.loadGraduacoes(),
      this.loadEspecialidades(),
    ]);
  }

  async loadFaculdades() {
    this.faculdades = await this.faculdadeRepo.getAll();
  }

  async loadAreasInteresse() {
    this.areas = await this.areaRepo.getAll();
  }

  async loadConcursos() {
    this.concursos = await this.concursoRepo.getAll();
  }

  async loadGraduacoes() {
    this.graduacoes = await this.graduacaoRepo.getAll();
  }

  async loadEspecialidades() {
    this.especialidades = await this.especialidadeRepo.getAll();
  }

  goBack() {
    this.navController.navigateBack(['dados-pessoais']);
  }

  continue() {
    this.navController.navigateForward(['conclusao']);
  }

  trackById(index: number, item: any): string {
    return item.id;
  }
}

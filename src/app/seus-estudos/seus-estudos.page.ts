import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlunoRepository } from '../repositories/aluno';
import { Area, AreaRepository } from '../repositories/area';
import { Concurso, ConcursoRepository } from '../repositories/concurso';
import {
  Especialidade,
  EspecialidadeRepository,
} from '../repositories/especialidade';
import { Faculdade, FaculdadeRepository } from '../repositories/faculdade';
import { Graduacao, GraduacaoRepository } from '../repositories/graduacao';

import { WizardService } from '../wizard.service';

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

  form!: FormGroup;

  constructor(
    private navController: NavController,
    private faculdadeRepo: FaculdadeRepository,
    private areaRepo: AreaRepository,
    private concursoRepo: ConcursoRepository,
    private especialidadeRepo: EspecialidadeRepository,
    private graduacaoRepo: GraduacaoRepository,
    private wizard: WizardService
  ) {}

  get especialidadeControl() {
    return this.getControl('especialidade');
  }

  getControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  ngOnInit() {
    this.form = this.wizard.preferences;

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

  save() {
    if (this.form.valid) {
      this.wizard.next();
      this.navController.navigateForward(['redes-sociais']);
    }
  }

  faculdadeControl() {
    return this.getControl('faculdade');
  }

  isInvalid(control: AbstractControl<any, any> | null): boolean {
    if (!control) {
      return false;
    }

    return control.invalid && control.touched;
  }

  findDescription<T extends { id: string | number; description: string }>(
    collection: T[],
    id: string
  ): string | undefined {
    return collection.find((c) => c.id === id)?.description ?? 'Selecionar';
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

  trackById(index: number, item: any): string {
    return item.id;
  }
}

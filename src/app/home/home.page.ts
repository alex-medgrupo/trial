import { Component } from '@angular/core';
import { AreaRepository } from '../repositories/area';
import { ConcursoRepository } from '../repositories/concurso';
import { EspecialidadeRepository } from '../repositories/especialidade';
import { GraduacaoRepository } from '../repositories/graduacao';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private repo: AreaRepository) {}

  ngOnInit() {
    this.load();
  }

  async load() {
    const result = await this.repo.getAll();
    console.log('res => ', result);
  }
}

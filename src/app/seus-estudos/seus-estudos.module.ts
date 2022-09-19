import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { HeaderModule } from '../components/header/header.module';
import { StepperModule } from '../components/stepper/stepper.module';
import { AreaRepository } from '../repositories/area';
import { ConcursoRepository } from '../repositories/concurso';
import { EspecialidadeRepository } from '../repositories/especialidade';
import { FaculdadeRepository } from '../repositories/faculdade';
import { GraduacaoRepository } from '../repositories/graduacao';
import { SeusEstudosPageRoutingModule } from './seus-estudos-routing.module';
import { SeusEstudosPage } from './seus-estudos.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    SeusEstudosPageRoutingModule,
    HeaderModule,
    StepperModule,
  ],
  providers: [
    FaculdadeRepository,
    AreaRepository,
    AreaRepository,
    ConcursoRepository,
    EspecialidadeRepository,
    GraduacaoRepository,
  ],
  declarations: [SeusEstudosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeusEstudosPageModule {}

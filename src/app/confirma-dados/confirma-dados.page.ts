import { Component, OnInit } from '@angular/core';
import { AlunoRepository } from '../repositories/aluno';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-confirma-dados',
  templateUrl: './confirma-dados.page.html',
  styleUrls: ['./confirma-dados.page.scss'],
})
export class ConfirmaDadosPage implements OnInit {
  name = '';

  constructor(private wizard: WizardService, private aluno: AlunoRepository) {}

  async getName() {
    const { email, cpf } = this.wizard.personal.value;

    console.log('name =!!', email, cpf);

    this.name = await this.aluno.registeredName(email, cpf);
  }

  ngOnInit() {
    this.getName();
  }
}

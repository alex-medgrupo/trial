import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AlunoRepository } from '../repositories/aluno';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.page.html',
  styleUrls: ['./dados-pessoais.page.scss'],
})
export class DadosPessoaisPage implements OnInit {
  form!: FormGroup;

  constructor(
    private wizard: WizardService,
    private navController: NavController,
    private alunoRepo: AlunoRepository
  ) {}

  get accepted() {
    return this.form.get('accepted');
  }

  ngOnInit() {
    // TODO: custom validators
    this.form = this.wizard.personal;
  }

  isAccepted(): boolean {
    return !!this.accepted?.valid;
  }

  async save() {
    if (this.form.valid) {
      const { email, cpf } = this.form.value;
      const exists = await this.alunoRepo.alreadyRegistered(email, cpf);

      if (exists) {
        this.navController.navigateForward(['confirma-dados']);
      } else {
        this.wizard.next();
        this.navController.navigateForward(['seus-estudos']);
      }
    }
  }
}

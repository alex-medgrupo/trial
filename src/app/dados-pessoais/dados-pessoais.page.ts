import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
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
    private navController: NavController
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

  save() {
    console.log('valid ?', this.form.valid);

    console.log('form => ', this.form.value);

    this.navController.navigateForward(['seus-estudos']);
    // salva no serviço apropriado
    // se for válido vai para a segunda etapa ->
  }
}

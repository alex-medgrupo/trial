import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserTrial } from '../types';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.page.html',
  styleUrls: ['./dados-pessoais.page.scss'],
})
export class DadosPessoaisPage {
  form: FormGroup;

  constructor(private fb: FormBuilder, private navController: NavController) {
    // TODO: custom validators

    this.form = this.fb.group({
      name: ['', Validators.required],
      country: ['55', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.pattern(/\d/)]],
      accepted: [false, Validators.requiredTrue],
    });
  }

  get accepted() {
    return this.form.get('accepted');
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

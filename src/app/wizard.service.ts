import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoRepository } from './repositories/aluno';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  currentStep = 1;

  #form: FormGroup;

  constructor(private fb: FormBuilder, private alunoRepo: AlunoRepository) {
    this.#form = this.fb.group({
      personal: this.fb.group({
        name: ['', Validators.required],
        country: ['55', Validators.required],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        cpf: ['', [Validators.required, Validators.pattern(/\d/)]],
        accepted: [false, Validators.requiredTrue],
      }),

      preferences: this.fb.group({
        faculdade: [null, Validators.required],
        graduacao: [null, Validators.required],
        area: [null, Validators.required],
        especialidade: [null, Validators.required],
        concurso: [null, Validators.required],
      }),

      socialNetwork: this.fb.group({
        socialNetwork: [],
        address: [],
      }),
    });
  }

  get form() {
    return this.#form;
  }

  get personal(): FormGroup {
    return this.#form.get('personal') as FormGroup;
  }

  get preferences(): FormGroup {
    return this.#form.get('preferences') as FormGroup;
  }

  get socialNetwork(): FormGroup {
    return this.#form.get('socialNetwork') as FormGroup;
  }

  async save() {
    const {
      personal: { name: Nome, email: Email, cpf: Registro },
      preferences: {
        especialidade: IdEspecialidade,
        concurso: IdConcurso,
        faculdade: IdFaculdade,
        area: IdObjetivo,
        graduacao: IdFormatura,
      },
      socialNetwork: { socialNetwork: IdRedeSocial, address: RedeSocial },
    } = this.form.value;

    const Celular = this.form.value.country + this.form.value.phone;

    const data = {
      Registro,
      Nome,
      Email,
      Celular,
      IdEspecialidade,
      IdConcurso,
      IdFaculdade,
      IdObjetivo,
      IdFormatura,
      IdRedeSocial,
      RedeSocial,
      Sexo: 0,
      AnoNascimento: 1986,
      MesNascimento: 12,
      DiaNascimento: 9,
    };

    await this.alunoRepo.signUp(data);
  }

  next() {
    this.currentStep++;
  }

  reset() {
    this.currentStep = 1;
  }
}

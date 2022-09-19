import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  currentStep = 1;

  #form: FormGroup;

  constructor(private fb: FormBuilder) {
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

  next() {
    this.currentStep++;
  }

  reset() {
    this.currentStep = 1;
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-redes-sociais',
  templateUrl: './redes-sociais.page.html',
  styleUrls: ['./redes-sociais.page.scss'],
})
export class RedesSociaisPage implements OnInit {
  redes = [
    { id: 1, description: 'Instagram' },
    { id: 2, description: 'Twitter' },
    { id: 3, description: 'Facebook' },
    { id: 4, description: 'Twitter' },
    { id: 5, description: 'YouTube' },
    { id: 6, description: 'LinkedIn' },
    { id: 7, description: 'Hello' },
    { id: 8, description: 'Outra' },
  ];

  form!: FormGroup;

  constructor(
    private wizard: WizardService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.form = this.wizard.socialNetwork;
  }

  getControl(name: string) {
    return this.form.get(name) as FormControl;
  }

  findDescription<T extends { id: string | number; description: string }>(
    collection: T[],
    id: string
  ): string | undefined {
    return collection.find((c) => c.id === id)?.description ?? 'Selecionar';
  }

  async save() {
    if (this.form.valid) {
      this.wizard.next();
      await this.wizard.save();
      this.navController.navigateForward(['conclusao']);
    }
  }

  goBack() {
    this.navController.navigateBack(['seus-estudos']);
  }
}

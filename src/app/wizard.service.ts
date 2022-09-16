import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  currentStep = 1;

  next() {
    this.currentStep++;
  }

  reset() {
    this.currentStep = 1;
  }
}

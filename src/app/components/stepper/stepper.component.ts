import { Component, Input, OnInit } from '@angular/core';
import { stepGenerator } from '@shared/utils';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  /**
   * Define o titulo da página.
   */
  @Input() pageTitle!: string;

  /**
   * Define o step ativo.
   */
  @Input() activeStep!: number;

  /**
   * Define a quantidades de steps a serem renderizados.
   */
  @Input() stepQuantity = 3;

  iterator!: number[];

  constructor() {}

  ngOnInit() {
    this.iterator = [...stepGenerator(this.stepQuantity)];
  }
}

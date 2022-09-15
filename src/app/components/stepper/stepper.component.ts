import { Component, Input, OnInit } from '@angular/core';

function* stepGenerator(stepQuantity: number) {
  for (let index = 1; index <= stepQuantity; index++) {
    yield index;
  }
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  /**
   * Define o titulo da página.
   */
  @Input() pageTitle: string;

  /**
   * Define o step ativo.
   */
  @Input() activeStep: number;

  /**
   * Define a quantidades de steps a serem renderizados.
   */
  @Input() stepQuantity = 3;

  iterator: number[];

  constructor() {}

  ngOnInit() {
    this.iterator = [...stepGenerator(this.stepQuantity)];
  }
}

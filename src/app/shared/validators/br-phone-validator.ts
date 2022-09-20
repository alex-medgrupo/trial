import { type ValidatorFn } from '@angular/forms';

const phoneValidator: ValidatorFn = (control) => {
  const forbidden = !control.value.test(/\d{8,9}/);

  return forbidden
    ? {
        value: 'Telefone com formato inválido',
      }
    : null;
};

export default phoneValidator;

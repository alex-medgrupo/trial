import { type ValidatorFn } from '@angular/forms';
import { cpf } from 'cpf-cnpj-validator';

const CPFvalidator: ValidatorFn = (control) => {
  const forbidden = !cpf.isValid(control.value);

  return forbidden
    ? {
        cpf: {
          message: 'CPF inválido',
        },
      }
    : null;
};

export default CPFvalidator;

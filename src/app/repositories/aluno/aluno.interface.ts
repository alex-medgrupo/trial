export interface SignUpDto {
  Registro: string;
  AnoNascimento: number;
  MesNascimento: number;
  DiaNascimento: number;
  Nome: string;
  Sexo: number;
  Celular: string;
  Email: string;
  IdEspecialidade: number;
  IdFormatura: number;
  IdFaculdade: number;
  IdConcurso: number;
  IdObjetivo: number;
  IdRedeSocial: number;
  RedeSocial: string;
}

export interface SignUpResponseDto {
  Sucesso: boolean;
  /**
   * Apenas é setado se Sucesso == true
   */
  MensagemErro?: string;
}

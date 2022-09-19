import { Injectable } from '@angular/core';
import { HttpProvider } from '@shared/http.provider';
import { API_TRIAL } from 'src/environments/environment';
import { SignUpDto, SignUpResponseDto } from './aluno.interface';

@Injectable()
export class AlunoRepository {
  // #mapper = new AlunoMapper();

  constructor(private http: HttpProvider) {}

  private static get baseUrl(): string {
    return `${API_TRIAL}/Extensivo/Cadastro`;
  }

  async signUp(data: SignUpDto): Promise<string | undefined> {
    const result = await this.http.post<SignUpResponseDto>(
      AlunoRepository.baseUrl + '/Inserir',
      data
    );

    return result?.MensagemErro;
  }

  async alreadyRegistered(email: string, cpf: string): Promise<boolean> {
    const result = await this.http.post<SignUpResponseDto>(
      AlunoRepository.baseUrl + '/Validar',
      {
        Registro: cpf,
        Email: email,
      }
    );

    return !result.Sucesso;
  }
}

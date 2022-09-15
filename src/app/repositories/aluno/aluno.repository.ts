import { Injectable } from '@angular/core';
import { HttpProvider } from '@shared/http.provider';
import { API_TRIAL } from 'src/environments/environment';
import { SignUpDto, SignUpResponseDto } from './aluno.interface';
import { AlunoMapper } from './aluno.mapper';

@Injectable()
export class AlunoRepository {
  #mapper = new AlunoMapper();

  constructor(private http: HttpProvider) {}

  private static get baseUrl(): string {
    return `${API_TRIAL}/Extensivo/Cadastro/Inserir`;
  }

  async signUp(data: SignUpDto): Promise<string | undefined> {
    const result = await this.http.post<SignUpResponseDto>(
      AlunoRepository.baseUrl,
      data
    );

    return result?.MensagemErro;
  }
}

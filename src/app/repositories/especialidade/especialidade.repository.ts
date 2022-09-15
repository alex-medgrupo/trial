import { Injectable } from '@angular/core';
import { HttpProvider } from '@shared/http.provider';
import { API_TRIAL } from 'src/environments/environment';
import { Especialidade, EspecialidadeDto } from './especialidade.interface';
import { EspecialidadeMapper } from './especialidade.mapper';

@Injectable()
export class EspecialidadeRepository {
  #mapper = new EspecialidadeMapper();

  constructor(private http: HttpProvider) {}

  private static get baseUrl(): string {
    return `${API_TRIAL}/Especialidades`;
  }

  async getAll(): Promise<Especialidade[]> {
    const result = await this.http.get<EspecialidadeDto[]>(
      EspecialidadeRepository.baseUrl
    );

    return this.#mapper.toEntityCollection(result);
  }
}

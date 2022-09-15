import { Injectable } from '@angular/core';
import { HttpProvider } from '@shared/http.provider';
import { API_TRIAL } from 'src/environments/environment';
import { Concurso, ConcursoDto } from './concurso.interface';
import { ConcursoMapper } from './concurso.mapper';

@Injectable()
export class ConcursoRepository {
  #mapper = new ConcursoMapper();

  constructor(private http: HttpProvider) {}

  private static get baseUrl(): string {
    return `${API_TRIAL}/Concursos`;
  }

  async getAll(): Promise<Concurso[]> {
    const result = await this.http.get<ConcursoDto[]>(
      ConcursoRepository.baseUrl
    );

    return this.#mapper.toEntityCollection(result);
  }
}

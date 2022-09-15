import { Injectable } from '@angular/core';
import { HttpProvider } from '@shared/http.provider';
import { API_TRIAL } from 'src/environments/environment';
import { Concurso, ConcursoDto } from './concursos.interface';
import { ConcursoMapper } from './concursos.mapper';

@Injectable()
export class ConcursoRepository {
  #mapper = new ConcursoMapper();

  constructor(private http: HttpProvider) {}

  private static get baseUrl(): string {
    return `${API_TRIAL}/Graduacao`;
  }

  async getAll(): Promise<Concurso[]> {
    const result = await this.http.get<ConcursoDto[]>(
      ConcursoRepository.baseUrl
    );

    return this.#mapper.toEntityCollection(result);
  }
}

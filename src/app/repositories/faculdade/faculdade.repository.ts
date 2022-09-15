import { Injectable } from '@angular/core';
import { HttpProvider } from '@shared/http.provider';
import { API_TRIAL } from 'src/environments/environment';
import { Faculdade, FaculdadeDto } from './faculdade.interface';
import { GraduacaoMapper } from './faculdade.mapper';

@Injectable()
export class FaculdadeRepository {
  #mapper = new GraduacaoMapper();

  constructor(private http: HttpProvider) {}

  private static get baseUrl(): string {
    return `${API_TRIAL}/Faculdades`;
  }

  async getAll(): Promise<Faculdade[]> {
    const result = await this.http.get<FaculdadeDto[]>(
      FaculdadeRepository.baseUrl
    );

    return this.#mapper.toEntityCollection(result);
  }
}

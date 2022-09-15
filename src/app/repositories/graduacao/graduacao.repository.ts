import { Injectable } from '@angular/core';
import { HttpProvider } from '@shared/http.provider';
import { API_TRIAL } from 'src/environments/environment';
import { Graduacao, GraduacaoDto } from './graduacao.interface';
import { GraduacaoMapper } from './graduacao.mapper';

@Injectable()
export class GraduacaoRepository {
  #mapper = new GraduacaoMapper();

  constructor(private http: HttpProvider) {}

  private static get baseUrl(): string {
    return `${API_TRIAL}/Graduacao`;
  }

  async getAll(): Promise<Graduacao[]> {
    const result = await this.http.get<GraduacaoDto[]>(
      GraduacaoRepository.baseUrl
    );

    return this.#mapper.toEntityCollection(result);
  }
}

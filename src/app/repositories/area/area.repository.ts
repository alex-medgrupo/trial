import { Injectable } from '@angular/core';
import { HttpProvider } from '@shared/http.provider';
import { API_TRIAL } from 'src/environments/environment';
import { Area, AreaDto } from './area.interface';
import { AreaMapper } from './area.mapper';

@Injectable()
export class AreaRepository {
  #mapper = new AreaMapper();

  constructor(private http: HttpProvider) {}

  private static get baseUrl(): string {
    return `${API_TRIAL}/AreaDesejo`;
  }

  async getAll(): Promise<Area[]> {
    const result = await this.http.get<AreaDto[]>(AreaRepository.baseUrl);

    return this.#mapper.toEntityCollection(result);
  }
}

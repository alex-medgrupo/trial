import Mapper from 'src/app/shared/mapper.abstract';
import { Concurso, ConcursoDto } from './concursos.interface';

export class ConcursoMapper extends Mapper<Concurso, ConcursoDto> {
  toDto({ id, description }: Concurso): ConcursoDto {
    return {
      Id: id,
      Descricao: description,
    };
  }

  toEntity({ Id, Descricao }: ConcursoDto): Concurso {
    return {
      id: Id,
      description: Descricao,
    };
  }
}

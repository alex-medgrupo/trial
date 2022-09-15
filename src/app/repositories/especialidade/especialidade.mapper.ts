import Mapper from 'src/app/shared/mapper.abstract';
import { Especialidade, EspecialidadeDto } from './especialidade.interface';

export class EspecialidadeMapper extends Mapper<
  Especialidade,
  EspecialidadeDto
> {
  toDto({ id, description }: Especialidade): EspecialidadeDto {
    return {
      Id: id,
      Descricao: description,
    };
  }

  toEntity({ Id, Descricao }: EspecialidadeDto): Especialidade {
    return {
      id: Id,
      description: Descricao,
    };
  }
}

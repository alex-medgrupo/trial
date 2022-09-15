import Mapper from 'src/app/shared/mapper.abstract';
import { Aluno, AlunoDto } from './aluno.interface';

export class AlunoMapper extends Mapper<Aluno, AlunoDto> {
  toDto({ id, description }: Aluno): AlunoDto {
    return {
      Id: id,
      Descricao: description,
    };
  }

  toEntity({ Id, Descricao }: AlunoDto): Aluno {
    return {
      id: Id,
      description: Descricao,
    };
  }
}

import Mapper from 'src/app/shared/mapper.abstract';
import { Faculdade, FaculdadeDto } from './faculdade.interface';

export class GraduacaoMapper extends Mapper<Faculdade, FaculdadeDto> {
  toDto({ id, description }: Faculdade): FaculdadeDto {
    return {
      Id: id,
      Descricao: description,
    };
  }

  toEntity({ Id, Descricao }: FaculdadeDto): Faculdade {
    return {
      id: Id,
      description: Descricao,
    };
  }
}

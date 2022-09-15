import Mapper from 'src/app/shared/mapper.abstract';
import { Graduacao, GraduacaoDto } from './graduacao.interface';

export class GraduacaoMapper extends Mapper<Graduacao, GraduacaoDto> {
  toDto({ id, description }: Graduacao): GraduacaoDto {
    return {
      Id: id,
      Descricao: description,
    };
  }

  toEntity({ Id, Descricao }: GraduacaoDto): Graduacao {
    return {
      id: Id,
      description: Descricao,
    };
  }
}

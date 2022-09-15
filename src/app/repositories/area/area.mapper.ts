import Mapper from 'src/app/shared/mapper.abstract';
import { Area, AreaDto } from './area.interface';

export class AreaMapper extends Mapper<Area, AreaDto> {
  toDto({ id, description }: Area): AreaDto {
    return {
      Id: id,
      Descricao: description,
    };
  }

  toEntity({ Id, Descricao }: AreaDto): Area {
    return {
      id: Id,
      description: Descricao,
    };
  }
}

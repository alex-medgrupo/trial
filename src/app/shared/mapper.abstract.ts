export default abstract class Mapper<TEntity, TDto> {
  toDtoCollection(entity: TEntity[]): TDto[] {
    return entity.map((e) => this.toDto(e));
  }

  toEntityCollection(dto: TDto[]): TEntity[] {
    return dto.map((e) => this.toEntity(e));
  }

  abstract toDto(entity: TEntity): TDto;
  abstract toEntity(dto: TDto): TEntity;
}

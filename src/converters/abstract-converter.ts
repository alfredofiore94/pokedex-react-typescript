export abstract class AbstractConverter<D, E> {
  abstract toDTO(entity: E): D;
  abstract toEntity(dto: D): E;

  toDTOs(entities: E[]): D[] {
    //const dtos: D[] = [];
    return entities.map<D>((entity) => {
      return this.toDTO(entity);
    });
  }

  toEntities(dtos: D[]) {
    return dtos.map<E>((dto) => {
      return this.toEntity(dto);
    });
  }
}

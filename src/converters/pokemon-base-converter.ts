import type { PokemonBaseDTO } from "../dto/pokemon-base-dto";
import type { PokemonBase } from "../models/pokemon";
import { extractIdByUrl } from "../utils/data-utils";
import { AbstractConverter } from "./abstract-converter";

export class PokemonBaseConverter extends AbstractConverter<
  PokemonBaseDTO,
  PokemonBase
> {
  toDTO(entity: PokemonBase): PokemonBaseDTO {
    throw new Error("Method not implemented.");
  }
  toEntity(dto: PokemonBaseDTO): PokemonBase {
    const entity: PokemonBase = {
      id: extractIdByUrl(dto.url),
      name: dto.name,
      url: dto.url,
    };
    return entity;
  }
}

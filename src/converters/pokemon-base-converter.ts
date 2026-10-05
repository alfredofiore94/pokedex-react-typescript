import type {
  PokemonBaseDTO,
  PokemonBaseElementDTO,
} from "../dto/pokemon-base-dto";
import type { BaseList, PokemonBase } from "../models/pokemon";
import { extractIdByUrl } from "../utils/data-utils";
import { AbstractConverter } from "./abstract-converter";

export class PokemonBaseConverter extends AbstractConverter<
  PokemonBaseDTO,
  BaseList
> {
  toDTO(entity: BaseList): PokemonBaseDTO {
    throw new Error("Method not implemented.");
  }
  toEntity(dto: PokemonBaseDTO): BaseList {
    const entity: BaseList = {
      pokemonBaseList: this.toPokemonBaseList(dto.results),
      pokemonCount: dto.count,
    };
    return entity;
  }

  toPokemonBaseList(pkBaseelements: PokemonBaseElementDTO[]): PokemonBase[] {
    const pokemonBaseList: PokemonBase[] = [];
    pkBaseelements.forEach((pokemon) => {
      const pokemonBase: PokemonBase = {
        id: extractIdByUrl(pokemon.url),
        name: pokemon.name,
        url: pokemon.url,
      };
      pokemonBaseList.push(pokemonBase);
    });
    return pokemonBaseList;
  }
}

import type { PokemonDetailsDTO } from "../dto/pokemon-details-dto";
import type { Pokemon, Typology } from "../models/pokemon";
import { extractIdByUrl } from "../utils/data-utils";
import { AbstractConverter } from "./abstract-converter";

export class PokemonDetailsConverter extends AbstractConverter<
  PokemonDetailsDTO,
  Pokemon
> {
  toDTO(entity: Pokemon): PokemonDetailsDTO {
    throw new Error("Method not implemented.");
  }
  toEntity(dto: PokemonDetailsDTO): Pokemon {
    const entity: Pokemon = {
      id: dto.id,
      name: dto.name,
      url: "",
      baseExperience: dto.base_experience,
      height: dto.height,
      weight: dto.weight,
      abilities: this.toAbilities(dto),

      types: this.toTypes(dto),
      sprites: {
        baseImageUrl: dto.sprites.other.home.front_default,
        gifImageUrl: dto.sprites.other.showdown.front_default,
      },
    };
    return entity;
  }

  toAbilities(dto: PokemonDetailsDTO): Typology[] {
    const abilities: Typology[] = [];
    dto.abilities.forEach((ability) => {
      const tipology: Typology = {
        id: extractIdByUrl(ability.ability.url),
        name: ability.ability.name,
      };
    });
    return abilities;
  }

  toTypes(dto: PokemonDetailsDTO): Typology[] {
    const types: Typology[] = [];
    dto.types.forEach((tp) => {
      const tipology: Typology = {
        id: extractIdByUrl(tp.type.url),
        name: tp.type.name,
      };
    });
    return types;
  }
}

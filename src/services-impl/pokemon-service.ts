import { PokemonBaseConverter } from "../converters/pokemon-base-converter";
import { PokemonDetailsConverter } from "../converters/pokemon-details-converter";
import type { PokemonBaseDTO } from "../dto/pokemon-base-dto";
import type { PokemonDetailsDTO } from "../dto/pokemon-details-dto";
import type { ResponseModel } from "../dto/response-model";
import type { Pokemon, BaseList } from "../models/pokemon";
import { PokemonBaseRepository } from "../repository/pokemon-base-repository";
import { PokemonDetailsRepository } from "../repository/pokemon-details-repository";
import type { IPokemonService } from "../services/i-pokemon-service";

export class PokemonsService implements IPokemonService {
  private _pokemonBaseRepository: PokemonBaseRepository;
  private _pokemonDetailsRepository: PokemonDetailsRepository;

  private _pokemonBaseConverter: PokemonBaseConverter;
  private _pokemonDetailsConverter: PokemonDetailsConverter;

  constructor() {
    this._pokemonBaseRepository = new PokemonBaseRepository();
    this._pokemonDetailsRepository = new PokemonDetailsRepository();
    this._pokemonBaseConverter = new PokemonBaseConverter();
    this._pokemonDetailsConverter = new PokemonDetailsConverter();
  }
  async getPokemonListBaseFiltered(
    offset: string,
    limit: string,
  ): Promise<BaseList> {
    const responseModel: ResponseModel<PokemonBaseDTO> =
      await this._pokemonBaseRepository.getEntityIdAsync({
        queryParams: [
          { key: "offset", values: [offset] },
          { key: "limit", values: [limit] },
        ],
      });

    if (responseModel.metadata?.result) {
      return this._pokemonBaseConverter.toEntity(responseModel.payload!);
    } else {
      //console.log(responseModel.metadata?.errorMessage);
    }

    throw new Error();
  }
  async getPokemonDetails(id: string): Promise<Pokemon> {
    const responseModel: ResponseModel<PokemonDetailsDTO> =
      await this._pokemonDetailsRepository.getEntityIdAsync({ pathParam: id });

    if (responseModel.metadata?.result) {
      return this._pokemonDetailsConverter.toEntity(responseModel.payload!);
    } else {
      //console.log(responseModel.metadata?.errorMessage);
    }

    throw new Error();
  }
  async getPokemonListBase(): Promise<BaseList> {
    const responseModel: ResponseModel<PokemonBaseDTO> =
      await this._pokemonBaseRepository.getEntityAsync();
    if (responseModel.metadata?.result) {
      return this._pokemonBaseConverter.toEntity(responseModel.payload!);
    } else {
      //console.log(responseModel.metadata?.errorMessage);
    }

    throw new Error();
  }
}

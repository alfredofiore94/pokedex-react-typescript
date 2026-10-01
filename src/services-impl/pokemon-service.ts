import { PokemonBaseConverter } from "../converters/pokemon-base-converter";
import { PokemonDetailsConverter } from "../converters/pokemon-details-converter";
import type { PokemonBase, Pokemon } from "../models/pokemon";
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
  getPokemonListBase(): Promise<PokemonBase[]> {
    throw new Error("Method not implemented.");
  }
  getPokemonDetails(): Promise<Pokemon> {
    throw new Error("Method not implemented.");
  }
}

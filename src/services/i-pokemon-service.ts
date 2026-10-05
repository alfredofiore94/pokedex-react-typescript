import type { BaseList, Pokemon, PokemonBase } from "../models/pokemon";

export interface IPokemonService {
  getPokemonListBase: (offset: string, limit: string) => Promise<BaseList>;
  getPokemonDetails: (id: string) => Promise<Pokemon>;
}

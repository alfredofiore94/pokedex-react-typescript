import type { BaseList, Pokemon, PokemonBase } from "../models/pokemon";

export interface IPokemonService {
  getPokemonListBaseFiltered: (
    offset: string,
    limit: string,
  ) => Promise<BaseList>;
  getPokemonDetails: (id: string) => Promise<Pokemon>;
  getPokemonListBase: () => Promise<BaseList>;
}

import type { Pokemon, PokemonBase } from "../models/pokemon";

export interface IPokemonService {
  getPokemonListBase: () => Promise<PokemonBase[]>;
  getPokemonDetails: (id: string) => Promise<Pokemon>;
}

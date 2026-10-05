export interface PokemonBaseDTO {
  results: PokemonBaseElementDTO[];
  count: number;
  next: string;
  previous: string;
}

export interface PokemonBaseElementDTO {
  name: string;
  url: string;
}

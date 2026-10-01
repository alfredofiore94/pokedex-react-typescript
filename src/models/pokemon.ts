export interface PokemonBase {
  id: number;
  name: string;
  url: string;
}

export type Typology = {
  id: number;
  name: string;
};

interface Sprite {
  baseImageUrl: string;
  gifImageUrl: string;
}

export interface Pokemon extends PokemonBase {
  baseExperience: number;
  height: number;
  weight: number;
  abilities: Typology[];
  types: Typology[];
  sprites: Sprite;
}

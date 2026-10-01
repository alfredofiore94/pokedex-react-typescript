export interface PokemonDetailsDTO {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: Ability[];
  types: Type[];
  sprites: {
    other: {
      home: {
        front_default: string;
      };
      showdown: {
        front_default: string;
      };
    };
  };
}

interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

interface Type {
  type: {
    name: string;
    url: string;
  };
}

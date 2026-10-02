import type { Pokemon } from "../models/pokemon";
import loadingGif from "../assets/loading_gif.gif";
export function initPokemonCard(
  id: number,
  name: string,
  url: string,
): Pokemon {
  return {
    baseExperience: 0,
    height: 0,
    weight: 0,
    abilities: [],
    types: [],
    sprites: {
      baseImageUrl: "./lo",
      gifImageUrl: loadingGif,
    },
    id: id,
    name: name,
    url: url,
  };
}

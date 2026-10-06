import { createContext } from "react";

export interface NavbarCtx {
  searchPokemonValue: string;
  onSearchPokemon: (searchValue: string) => void;
}

export const NavbarContext = createContext<NavbarCtx>({
  searchPokemonValue: "",
  onSearchPokemon: () => {},
});

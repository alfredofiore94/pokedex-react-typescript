import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/navigation-bar/navigation-bar";
import "./root-page.css";
import { NavbarContext } from "../../store/navbar-context";
import { useState } from "react";
function RootPage() {
  const [searchPokemonValue, setSearchPokemonValue] = useState<string>("");

  function onSubmitSearch(valueToSearch: string) {
    setSearchPokemonValue(valueToSearch);
  }
  return (
    <>
      <NavbarContext
        value={{
          searchPokemonValue: searchPokemonValue,
          onSearchPokemon: onSubmitSearch,
        }}
      >
        <NavigationBar />
        <main className="">
          <Outlet />
        </main>
      </NavbarContext>
    </>
  );
}

export default RootPage;

import { useContext, useState, type ChangeEvent } from "react";
import { NavbarContext } from "../../store/navbar-context";
import "./navigation-bar.css";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [inputSearchValue, setInputsearchValue] = useState<string>("");
  const { onSearchPokemon } = useContext(NavbarContext);

  function handleSubmitSearchPokemon() {
    onSearchPokemon(inputSearchValue);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputsearchValue(event.target.value);
  }
  return (
    <div className="flex-none navbar  bg-base-100 shadow-sm">
      <Link
        to="/pokedex"
        className="navbar-start btn btn-ghost text-xl text-center"
      >
        Home
      </Link>

      <div className="flex-none navbar-end">
        <label className="input w-50 ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            id="input-serach-pokemon"
            type="search"
            className="grow"
            placeholder="Cerca Pokèmon"
            onChange={(event) => handleInputChange(event)}
            value={inputSearchValue}
          />
        </label>
        <button
          className="btn btn-ghost text-xl"
          onClick={() => handleSubmitSearchPokemon()}
        >
          Cerca
        </button>
      </div>
    </div>
  );
}

export default NavigationBar;

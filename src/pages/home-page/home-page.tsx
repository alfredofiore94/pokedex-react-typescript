import { useNavigate } from "react-router-dom";
import "./home-page.css";
import type { PokemonBase } from "../../models/pokemon";
import { useQuery } from "@tanstack/react-query";
import { PokemonsService } from "../../services-impl/pokemon-service";
import { useEffect, useState } from "react";
import PokemonCard from "../../components/pokemon-card/pokemon-card";

function HomePage() {
  const navigate = useNavigate();
  const pokemonService: PokemonsService = new PokemonsService();
  const { isPending, isFetched, data, isError, error } = useQuery<
    PokemonBase[]
  >({
    queryKey: ["pokemon-list"],
    queryFn: () => pokemonService.getPokemonListBase(),

    //staleTime: 5000, //il tempo trascorso il quale i dati vengono considerati obsoleti.
    //gcTime: 10000, //garbage collectore , cioè dopo quanto tempo la memoria deve essere svuotata
  });

  const [pokemonlist, setPokemonList] = useState<PokemonBase[]>([]);

  function navigateHandler(path: string) {
    navigate(path);
  }

  useEffect(() => {
    if (isFetched && data) {
      const pokemonListLoaded = data;
      setPokemonList(pokemonListLoaded);
      console.log("list pokemon", pokemonListLoaded);
    }
  }, [isFetched]);

  return (
    <div className="grid grid-cols-3 gap-4">
      {isError && (
        <div role="alert" className="alert alert-error alert-soft">
          <span>
            Errore {error.message} durante il caricamento dei dati dei
            giocatori!
          </span>
        </div>
      )}

      {pokemonlist && pokemonlist.length > 0 ? (
        pokemonlist.map((pokemonB, index) => (
          <PokemonCard key={index} pokemonBase={pokemonB}></PokemonCard>
        ))
      ) : (
        <div className="col-span-3 text-center">
          {isPending ? (
            <label className="no-result">
              Caricamento giocatori in corso ...
            </label>
          ) : (
            <label className="no-result">Nessun risultato disponibile</label>
          )}
        </div>
      )}
    </div>
  );
}

export default HomePage;

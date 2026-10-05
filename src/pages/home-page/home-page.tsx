import { useNavigate } from "react-router-dom";
import "./home-page.css";
import type { BaseList, PokemonBase } from "../../models/pokemon";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PokemonsService } from "../../services-impl/pokemon-service";
import { useEffect, useState } from "react";
import PokemonCard from "../../components/pokemon-card/pokemon-card";
import PaginationTable from "../../components/pagination-table/pagination-table";

function HomePage() {
  const pokemonService: PokemonsService = new PokemonsService();

  const [offset, setOffset] = useState(0);
  const limit = 100;

  const [numberPagesTable, setNumberPagesTable] = useState(4);
  const queryClient = useQueryClient();
  const { isPending, isFetched, isFetching, data, isError, error, isSuccess } =
    useQuery<BaseList>({
      queryKey: ["pokemon-list", { offset, limit }],
      queryFn: () =>
        pokemonService.getPokemonListBase(offset.toString(), limit.toString()),

      //staleTime: 5000, //il tempo trascorso il quale i dati vengono considerati obsoleti.
      //gcTime: 10000, //garbage collectore , cioè dopo quanto tempo la memoria deve essere svuotata
    });

  const [pokemonlist, setPokemonList] = useState<PokemonBase[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    // uso issucces perchè viene richiamato quando è eseguita la query ed ha ricevuto esito positivo dal server
    if (isFetched && data) {
      setNumberPagesTable(data.pokemonCount / limit);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFetched && data) {
      const pokemonListLoaded = data.pokemonBaseList.map((pok) => ({ ...pok }));
      setPokemonList(pokemonListLoaded);

      //console.log("list pokemon", pokemonListLoaded);
    }
  }, [isFetching]);

  function handleChangePage(selectedPage: number) {
    setPageNumber(selectedPage);

    if (selectedPage == 1) {
      setOffset(0);
    } else {
      const newOffSet = selectedPage * limit - limit;
      setOffset(newOffSet);
    }
  }

  return (
    <>
      <div className="mt-10">
        <PaginationTable
          selectedPage={pageNumber}
          minValuePages={1}
          maxValuePages={numberPagesTable}
          selectPageFn={handleChangePage}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {isError && (
          <div role="alert" className="alert alert-error alert-soft">
            <span>
              Errore {error.message} durante il caricamento dei dati dei
              pokemon!
            </span>
          </div>
        )}

        {pokemonlist && pokemonlist.length > 0 ? (
          pokemonlist.map((pokemonB, index) => (
            <PokemonCard key={pokemonB.id} pokemonBase={pokemonB}></PokemonCard>
          ))
        ) : (
          <div className="col-span-3 text-center">
            {isPending ? (
              <label className="no-result">
                Caricamento pokedex in corso ...
              </label>
            ) : (
              <label className="no-result">Nessun risultato disponibile</label>
            )}
          </div>
        )}
      </div>
      <div className="my-10">
        <PaginationTable
          selectedPage={pageNumber}
          minValuePages={1}
          maxValuePages={numberPagesTable}
          selectPageFn={handleChangePage}
        />
      </div>
    </>
  );
}

export default HomePage;

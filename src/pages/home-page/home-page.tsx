import { useNavigate } from "react-router-dom";
import "./home-page.css";
import type { BaseList, PokemonBase } from "../../models/pokemon";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PokemonsService } from "../../services-impl/pokemon-service";
import { useContext, useEffect, useState } from "react";
import PokemonCard from "../../components/pokemon-card/pokemon-card";
import PaginationTable from "../../components/pagination-table/pagination-table";
import { NavbarContext } from "../../store/navbar-context";

function HomePage() {
  const pokemonService: PokemonsService = new PokemonsService();
  const { searchPokemonValue } = useContext(NavbarContext);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(100);

  const [numberPagesTable, setNumberPagesTable] = useState(1);
  const [pokemonlist, setPokemonList] = useState<PokemonBase[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { isPending, isFetched, isFetching, data, isError, error, isSuccess } =
    useQuery<BaseList>({
      queryKey: ["pokemon-list", { offset, limit }],
      queryFn: () =>
        pokemonService.getPokemonListBaseFiltered(
          offset.toString(),
          limit.toString(),
        ),
      //enabled: searchPokemonValue.trim() == "",

      //staleTime: 5000, //il tempo trascorso il quale i dati vengono considerati obsoleti.
      //gcTime: 10000, //garbage collectore , cioè dopo quanto tempo la memoria deve essere svuotata
    });

  useEffect(() => {
    if (searchPokemonValue.trim() != "") {
      setLimit(1000000);
      setOffset(0);
      setPageNumber(1);
    }
  }, [searchPokemonValue]);

  useEffect(() => {
    if (isSuccess && data /*&& searchPokemonValue.trim() == ""*/) {
      const countPages =
        data.pokemonCount / limit + (data.pokemonCount % limit != 0 ? 1 : 0);
      setNumberPagesTable(countPages);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isFetched && data /*&& searchPokemonValue.trim() == ""*/) {
      const pokemonListLoaded = data.pokemonBaseList.map((pk) => ({ ...pk }));
      if (searchPokemonValue.trim() != "") {
        const pokemonListFiltered = pokemonListLoaded.filter((pokemonF) => {
          pokemonF.name.includes(searchPokemonValue.trim());
        });
        setPokemonList(pokemonListFiltered);
      } else {
        setPokemonList(pokemonListLoaded);
      }
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

import { useParams } from "react-router-dom";
import type { Pokemon } from "../../models/pokemon";
import { useEffect, useState } from "react";
import { initPokemondetails } from "../../utils/config-pokemon-card";
import { PokemonsService } from "../../services-impl/pokemon-service";
import { useQuery } from "@tanstack/react-query";
import "./pokemon-details-page.css";
import OptionBoxDetails from "../../components/options-details/option-box-details/option-box-details";
import OptionTableDetails from "../../components/options-details/option-table-details/option-table-details";
function PokemonDetailsPage() {
  const params = useParams();

  const idPokemon = isNaN(Number(params.pokemonId))
    ? 0
    : Number(params.pokemonId);
  console.log();

  const [pokemon, setPokemon] = useState<Pokemon>(
    initPokemondetails(idPokemon),
  );
  const pokemonService: PokemonsService = new PokemonsService();
  const { isPending, isFetched, data, isError, error } = useQuery<Pokemon>({
    queryKey: ["pokemon", params.pokemonId!],
    queryFn: () =>
      pokemonService.getPokemonDetails(
        params.pokemonId ? params.pokemonId : "",
      ),

    //staleTime: 5000, //il tempo trascorso il quale i dati vengono considerati obsoleti.
    //gcTime: 10000, //garbage collectore , cioè dopo quanto tempo la memoria deve essere svuotata
  });
  useEffect(() => {
    if (data) {
      const pokemonLoaded = data;

      setPokemon({
        id: pokemonLoaded.id,
        url: pokemonLoaded.url,
        name: pokemonLoaded.name,
        baseExperience: pokemonLoaded.baseExperience,
        height: pokemonLoaded.height,
        weight: pokemonLoaded.weight,
        abilities: pokemonLoaded.abilities,
        types: pokemonLoaded.types,
        sprites: pokemonLoaded.sprites,
      });
    }
  }, [data]);
  return (
    <>
      {isError && (
        <div role="alert" className="alert alert-error alert-soft">
          <span>
            Errore {error.message} durante il caricamento dei dati del pokemon!
          </span>
        </div>
      )}
      <div>
        <h1 className="name-pokemon"> {pokemon.name}</h1>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/3">
          <img
            src={pokemon.sprites.baseImageUrl}
            alt="Shoes"
            className="image-pokemon rounded-xl border-4 m-10  "
          />
        </div>
        <div className="basis-2/3 ml-20 mt-10 mr-10">
          <div className="grid grid-cols-2 gap-4 ">
            <div className=" col-1 ">
              <OptionBoxDetails
                nameProperty={"Peso"}
                value={pokemon.weight.toString()}
              />
            </div>
            <div className="col-2">
              <OptionBoxDetails
                nameProperty={"Altezza"}
                value={pokemon.height.toString()}
              />
            </div>
            <div className=" col-1">
              <OptionBoxDetails
                nameProperty={"Punti esperienza"}
                value={pokemon.baseExperience.toString()}
              />
            </div>
            <div className="col-1 ">
              <OptionTableDetails
                nameProperty={"Abilità"}
                values={pokemon.abilities}
              />
            </div>
            <div className="col-2">
              <OptionTableDetails
                nameProperty={"Tipo Pokemon"}
                values={pokemon.types}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonDetailsPage;

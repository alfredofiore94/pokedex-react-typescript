import { useEffect, useState } from "react";
import type { Pokemon, PokemonBase } from "../../models/pokemon";
import { initPokemonCard } from "../../utils/config-pokemon-card";
import { useQuery } from "@tanstack/react-query";
import { PokemonsService } from "../../services-impl/pokemon-service";
import { useNavigate } from "react-router-dom";
import noImage from "../../assets/no_image_avaiable.png";
interface PokemonCardProps {
  pokemonBase: PokemonBase;
}
function PokemonCard({ pokemonBase }: PokemonCardProps) {
  const [pokemon, setPokemon] = useState<Pokemon>(
    initPokemonCard(pokemonBase.id, pokemonBase.name, pokemonBase.url),
  );
  const navigate = useNavigate();
  const pokemonService: PokemonsService = new PokemonsService();
  const { isPending, isFetching, data, isError, error } = useQuery<Pokemon>({
    queryKey: ["pokemon", pokemon.id],
    queryFn: () => pokemonService.getPokemonDetails(pokemonBase.id.toString()),

    //staleTime: 5000, //il tempo trascorso il quale i dati vengono considerati obsoleti.
    //gcTime: 10000, //garbage collectore , cioè dopo quanto tempo la memoria deve essere svuotata
  });
  useEffect(() => {
    if (data) {
      // console.log("detail data after fetch pokemon", data);

      const pokemonLoaded = { ...data };

      setPokemon({
        ...pokemon,
        baseExperience: pokemonLoaded.baseExperience,
        height: pokemonLoaded.height,
        weight: pokemonLoaded.weight,
        abilities: pokemonLoaded.abilities,
        types: pokemonLoaded.types,
        sprites: {
          baseImageUrl: pokemonLoaded.sprites.baseImageUrl,
          gifImageUrl:
            pokemonLoaded.sprites.gifImageUrl != null
              ? pokemonLoaded.sprites.gifImageUrl
              : noImage,
        },
      });
    }
  }, [isFetching]);

  function navigateHandler(path: string, pokemonId: number) {
    navigate(path + "/" + pokemonId);
  }

  return (
    <div className="card bg-base-100 m-10 shadow-sm ">
      <figure className="px-10 pt-10">
        <img src={pokemon.sprites.gifImageUrl} className="rounded-xl h-20 " />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title ">{pokemon.id}</h2>

        <h2 className="card-title">{pokemon.name}</h2>

        <div className="card-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigateHandler("details/", pokemon.id)}
          >
            Apri dettaglio
          </button>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;

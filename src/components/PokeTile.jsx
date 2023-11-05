import { useQuery } from "@tanstack/react-query";
import { fetchPokemonData } from "../utils/api";

/* eslint-disable react/prop-types */
export default function PokeTile({ monster }) {
  const {
    isPending,
    isError,
    error,
    data: pokemon,
  } = useQuery({
    queryKey: ["pokemon", monster.name],
    queryFn: () => fetchPokemonData(monster.name),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(pokemon);

  return (
    <div>
      <p>
        #{pokemon.id} {pokemon.name}
      </p>
      <img
        src={pokemon.sprites.front_default}
        alt={`image of ${pokemon.name}`}
      />
      <span>
        {pokemon.types.map((type) => {
          return <p key={type.slot}>{type.type.name}</p>;
        })}
      </span>
    </div>
  );
}

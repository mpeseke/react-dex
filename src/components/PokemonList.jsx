import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchAllPokemon } from "../apis/pokeAPI";

export default function PokemonList() {
  const [page, setPage] = useState(0);

  const {
    isPending,
    isError,
    error,
    isPlaceholderData,
    data: pokemonList,
  } = useQuery({
    queryKey: ["pokemonList", page],
    queryFn: () => fetchAllPokemon(page),
    placeholderData: keepPreviousData,
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  console.log(pokemonList);

  return (
    <>
      <ul>
        {pokemonList.results.map((pokemon, index) => (
          <li key={index}>
            <a href={pokemon.url}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (!isPlaceholderData && pokemonList.next) {
              setPage((old) => old + 1);
            }
          }}
          disabled={isPlaceholderData || !pokemonList.next}
        >
          Next
        </button>
      </div>
    </>
  );
}

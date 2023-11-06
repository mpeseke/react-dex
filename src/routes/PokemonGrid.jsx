import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchAllPokemon } from "../utils/api";
import { Grid, GridItem } from "@chakra-ui/react";
import PokeTile from "../components/PokeTile";
import styles from "./PokemonGrid.module.css";

export default function PokemonGrid() {
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

  return (
    <>
      <Grid>
        {pokemonList.results.map((pokemon, index) => (
          <PokeTile key={index} monster={pokemon} />
        ))}
      </Grid>
      <div className={styles.nav}>
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

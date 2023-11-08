/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { fetchPokemonDataById } from "../utils/api";

export const loader = async ({ params }) => {
  const pokemon = await fetchPokemonDataById(params.pokemonId);
  return { pokemon };
};

export default function PokemonPage() {
  const { pokemon } = useLoaderData();
  const { pokemonData, pokemonSpeciesData } = pokemon;

  return (
    <div>
      <p>{pokemonData.id}</p>
      <p>{pokemonData.name}</p>
    </div>
  );
}

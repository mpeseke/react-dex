export const fetchAllPokemon = async (page = 0) => {
  const offset = page * 25;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`
  );

  return response.json();
};

export const fetchPokemonData = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.json();
};

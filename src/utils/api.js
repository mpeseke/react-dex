export const fetchAllPokemon = async (page = 0) => {
  const offset = page * 24;
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=24&offset=${offset}`
  );

  return response.json();
};

export const fetchPokemonData = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const fetchPokemonDataById = async (id) => {
  const pokeDataUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokeSpeciesDataUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}`;

  const responses = await Promise.all([
    fetch(pokeDataUrl),
    fetch(pokeSpeciesDataUrl),
  ]);

  const pokemonData = await responses[0].json();
  const pokemonSpeciesData = await responses[1].json();

  return { pokemonData, pokemonSpeciesData };
};

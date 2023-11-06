import { useQuery } from "@tanstack/react-query";
import { fetchPokemonData } from "../utils/api";
import { Link } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

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
  return (
    <Card>
      <CardBody>
        <Image
          src={pokemon.sprites.front_default}
          alt={`image of ${pokemon.name}`}
        />
        <Stack>
          <Text>
            #{pokemon.id} {pokemon.name}
            <span>
              {pokemon.types.map((type) => {
                return (
                  <div key={type.slot}>
                    <p>{type.type.name}</p>
                  </div>
                );
              })}
            </span>
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup>
          <Link to={`/pokemon/${pokemon.id}`}>
            <Button>{pokemon.name}</Button>
          </Link>
          <Button>Add to Favorites</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

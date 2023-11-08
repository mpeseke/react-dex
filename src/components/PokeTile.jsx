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
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import TypePill from "./TypePill";

/* eslint-disable react/prop-types */
export default function PokeTile({ monster }) {
  const {
    isPending,
    isError,
    error,
    data: pokemon,
  } = useQuery({
    queryKey: ["pokemon", monster.url],
    queryFn: () => fetchPokemonData(monster.url),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <GridItem>
      <Card>
        <CardBody>
          <Image
            alt={`image of ${pokemon.name}`}
            src={pokemon.sprites.front_default}
          />
          <Stack>
            <Text textTransform="capitalize">
              #{pokemon.id} {pokemon.name}
            </Text>
            <Text className="classic-font">
              {pokemon.types.map((type) => {
                return <TypePill key={type.slot} typeName={type.type.name} />;
              })}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Link to={`/pokemon/${pokemon.id}`}>
              <Button textTransform="capitalize">{pokemon.name}</Button>
            </Link>
            <Button>Add to Favorites</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

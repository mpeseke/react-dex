import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import PokemonGrid from "./routes/PokemonGrid.jsx";
import PokemonPage, {
  loader as pokemonDataLoader,
} from "./routes/PokemonPage.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <PokemonGrid /> },
  {
    path: "/pokemon/:pokemonId",
    element: <PokemonPage />,
    loader: pokemonDataLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

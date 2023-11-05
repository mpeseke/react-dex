import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonGrid from "./components/PokemonGrid";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonGrid />
    </QueryClientProvider>
  );
}

export default App;

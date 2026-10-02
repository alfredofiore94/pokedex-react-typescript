import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page/error-page";
import RootPage from "./pages/root-page/root-page";
import HomePage from "./pages/home-page/home-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonDetailsPage from "./pages/pokemon-details-page/pokemon-details-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "pokedex",
          element: <HomePage />,
        },
        {
          path: "pokedex/details/:pokemonId",
          element: <PokemonDetailsPage />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

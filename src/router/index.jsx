import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import PokemonDetail from "../pages/PokemonDetail";
import Favorites from "../pages/Favorites";
import Badges from "../pages/Badges";
import Items from "../pages/Items";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pokemon/:id",
        element: <PokemonDetail />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "items",
        element: <Items />,
      },
    ],
  },
]);

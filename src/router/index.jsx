import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Placeholder from "../components/Placeholder";

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
        path: "favorites",
        element: <Placeholder title="Favoritos" />,
      },
      {
        path: "badges",
        element: <Placeholder title="Medallas" />,
      },
      {
        path: "items",
        element: <Placeholder title="Mochila" />,
      },
    ],
  },
]);

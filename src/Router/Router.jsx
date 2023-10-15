import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home";
import AddCoffe from "../pages/AddCoffe";

import CoffeDetails from "../Pages/CoffeDetails";
import ErrorPage from "../Pages/ErrorPage";
import UpdateCoffe from "../pages/UpdateCoffe";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import InstaPost from "../Features/InstaPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffes"),
      },
      {
        path: "/AddCoffe",
        element: <AddCoffe></AddCoffe>,
      },
      {
        path: "/CoffeDetails/:id",
        element: <CoffeDetails></CoffeDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffes/${params.id}`),
      },
      {
        path: "/UpdateCoffe/:id",
        element: <UpdateCoffe></UpdateCoffe>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffes/${params.id}`),
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Gallery",
        element: <InstaPost></InstaPost>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { Index, loader as indexLoader } from "./pages/Index";
import Layout from "./components/Layout";
import ErrorPage from "./components/ErrorPage";
import {
  NuevoCliente,
  action as nuevoClienteAction,
} from "./pages/NuevoCliente";
import {
  EditarCliente,
  loader as editarClienteLoader,
  action as editarClienteAction,
} from "./pages/EditarCliente";
import {EliminarCliente, loader as EliminarClienteLoader} from "./pages/EliminarCliente";

// React router dom is a library that allows us to create routes in our application
// This makes it easier to navigate between pages, and it's easy to plan the structure of our application

// The createBrowserRouter function allows us to create a router and pass it the routes we want to use
// This is used in the main.jsx file

// The Link component allows us to create links to navigate between pages
// This makes the page not reload when we navigate between pages, this is called a SPA (Single Page Application)

// The Outlet component allows us to render the content of the pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader,
        errorElement: <ErrorPage />,
      },
      { path: "/nosotros", element: <h1>Nosotros</h1> },
      { path: "/servicios", element: <h1>Servicios</h1> },
      {
        path: "/nuevo/cliente",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/editar/cliente/:clienteid",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/eliminar/cliente/:clienteid",
        element: <EliminarCliente />,
        loader: EliminarClienteLoader,
        errorElement: <ErrorPage />,
      }
    ],
  },
]);

export default router;

import { useLoaderData } from "react-router-dom";
import { obtenerClientes } from "../api/clientes";
import Cliente from "../components/Cliente";

// The useLoaderData hook allows us to access the data that we pass to the loader function
// This is used when we want to pass data to the page, for example, when we want to pass data from an API to the page

export const Index = () => {
  const datos = useLoaderData();
  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Index</h1>
      <p className="mt-3">Administra tus Clientes</p>
      {datos.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {datos.map((cliente) => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay clientes</p>
      )}
    </div>
  );
};

export const loader = () => {
  return obtenerClientes();
};

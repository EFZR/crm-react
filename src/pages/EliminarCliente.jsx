import { useNavigate, useLoaderData } from "react-router-dom";
import { destroyCliente, obtenerCliente } from "../api/clientes";

export const loader = async ({ params }) => {
  const cliente = await obtenerCliente(params.clienteid);
  if (Object.values(cliente).length === 0) {
    throw new Response("No se encontró el cliente", {
      status: 404,
      statusText: "No se encontró el cliente",
    });
  }
  return cliente;
};

export const EliminarCliente = () => {
  const navigate = useNavigate();
  const cliente = useLoaderData();
  const { nombre, telefono, email, empresa, id } = cliente;
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Eliminando a {nombre}</h1>
      <p className="mt-3">Estas seguro de eliminar al cliente?</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded hover:bg-blue-700"
          onClick={() => navigate(-1)}
        >
          volver
        </button>
        <button
          className="bg-red-800 text-white px-3 py-1 font-bold uppercase rounded hover:bg-red-700 ml-3"
          onClick={() => destroyCliente(id).then(() => navigate("/"))}
        >
          Eliminar
        </button>
      </div>
    </>
  );
};


import {
  useActionData,
  redirect,
  Form,
  useNavigate,
  useLoaderData,
} from "react-router-dom";
import { obtenerCliente, actualizarCliente } from "../api/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

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

export const action = async ({ request, params }) => {
  const formdata = await request.formData();
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  const datos = Object.fromEntries(formdata.entries());
  const mensaje = [];

  if (Object.values(datos).includes("")) {
    mensaje.push("Todos los campos son obligatorios");
  }
  if (!regex.test(datos.email)) {
    mensaje.push("El email es incorrecto");
  }
  if (mensaje.length > 0) {
    return mensaje;
  }

  actualizarCliente(datos, params.clienteid);
  return redirect("/");
};

export const EditarCliente = () => {
  const cliente = useLoaderData();
  const mensaje = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar Cliente</h1>
      <p className="mt-3">A continuación puedes editar los datos del cliente</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded hover:bg-blue-700"
          onClick={() => navigate("/")}
        >
          volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mt-5 mx-auto px-5 py-5">
        {mensaje?.length &&
          mensaje.map((item, index) => <Error key={index}>{item}</Error>)}
        <Form method="POST" noValidate>
          <Formulario cliente={cliente} />
          <input type="hidden" name="id" value={cliente.id} />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-700 rounded"
            value="Editar cliente"
          />
        </Form>
      </div>
    </>
  );
};

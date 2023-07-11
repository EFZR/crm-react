import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import { agregarCliente } from "../api/clientes";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

// useNavigate is a hook that allows us to navigate between pages
// This is used when we want to navigate between pages programmatically
// To use this hook we create a variable and assign it the useNavigate function
// Then we call the variable and pass it the path of the page we want to navigate
// something like this: navigate("/nuevo/cliente") or navigate("/") or navigate("-1")

// The Form component allows us to create forms with React-router-dom
// This component allows us to use POST and GET methods and send the data to the server
// This needs an action function to be able to send the data to the server
// The action can retrieve the data from the form with the request object
// The request object has a method called formData that allows us to retrieve the data from the form

// The useActionData hook allows us to retrieve the data from the action function

export const action = async ({ request }) => {
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

  agregarCliente(datos);
  return redirect("/");
};

export const NuevoCliente = () => {
  const mensaje = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">
        Llena todos los campos para registrar un nuevo cliente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase rounded hover:bg-blue-700"
          onClick={() => navigate(-1)}
        >
          volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mt-5 mx-auto px-5 py-5">
        {mensaje?.length &&
          mensaje.map((item, index) => <Error key={index}>{item}</Error>)}
        <Form method="POST" noValidate>
          <Formulario />
          <input
            type="submit"
            className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:bg-blue-700 rounded"
            value="registrar cliente"
          />
        </Form>
      </div>
    </>
  );
};

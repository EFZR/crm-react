export const obtenerClientes = async () => {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes`);
  const clientes = await respuesta.json();
  return clientes;
};

export const obtenerCliente = async (id) => {
  const respuesta = await fetch(
    `${import.meta.env.VITE_API_URL}/clientes/${id}`
  );
  const cliente = await respuesta.json();
  return cliente;
};

export const agregarCliente = async (datos) => {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/clientes`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const mensaje = await respuesta.json();
    console.log(mensaje);
    return mensaje;
  } catch (error) {
    console.log(error);
  }
};

export const actualizarCliente = async (datos, id) => {
  try {
    const respuesta = await fetch(
      `${import.meta.env.VITE_API_URL}/clientes/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(datos),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const mensaje = await respuesta.json();
    return mensaje;
  } catch (error) {
    console.log(error);
  }
};

export const destroyCliente = async (id) => {
  try {
    const respuesta = await fetch(
      `${import.meta.env.VITE_API_URL}/clientes/${id}`,
      {
        method: "DELETE",
      }
    );
    const mensaje = await respuesta.json();
    console.log(mensaje);
    return mensaje;
  } catch (error) {
    console.log(error);
  }
};

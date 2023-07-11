import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const navigate = useNavigate();
  const { nombre, telefono, email, empresa, id } = cliente;
  return (
    <tr>
      <td className="p-6 space-y">
        <p className="text-1xl text-gray-800 font-bold">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Telefono: </span>
          {telefono}
        </p>
      </td>
      <td className="p-6 flex justify-center gap-3">
        <button
          type="button"
          className="p-3 rounded bg-blue-600 hover:bg-blue-700 uppercase text-white font-bold text-xs"
          onClick={() => navigate(`/editar/cliente/${id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="p-3 rounded bg-red-600 hover:bg-red-700 uppercase text-white font-bold text-xs"
          onClick={() => navigate(`/eliminar/cliente/${id}`)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Cliente;

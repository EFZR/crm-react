import { useRouteError } from "react-router-dom";

// The useRouteError hook allows us to access the error that occurs in the route
// This is used when we want to show an error page when an error occurs in the route
// To use this hook we create a variable and assign it the useRouteError function
// Then we call the variable and pass it the path of the page we want to show the error page with errorElement

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1 className="text-center font-extrabold mt-5 text-blue-900 text-xl md:text-6xl">
        crm - clientes
      </h1>
      <p className="text-center font-bold text-lg mt-10">Hubo un error</p>
      <p className="text-center">{error.message || error.statusText}</p>
    </div>
  );
};

export default ErrorPage;

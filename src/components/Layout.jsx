import { Outlet, useLocation, Link } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">
            CRM - Clientes
          </h2>
          <nav className="mt-10">
            <Link
              className={`${
                location.pathname === "/" ? "text-blue-300" : "text-white"
              } text-sm md:text-lg block mt-2 hover:text-blue-300`}
              to="/"
            >
              Clientes
            </Link>
            <Link
              className={`${
                location.pathname === "/nuevo/cliente"
                  ? "text-blue-300"
                  : "text-white"
              } text-sm md:text-lg block mt-2 hover:text-blue-300`}
              to="/nuevo/cliente"
            >
              Nuevo Cliente
            </Link>
          </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;

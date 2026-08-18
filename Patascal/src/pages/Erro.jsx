import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-100 text-white px-6">
      <div className="text-center max-w-lg">

        <FaExclamationTriangle className="text-yellow-500 text-7xl mx-auto mb-6" />

        <h1 className="text-8xl font-extrabold text-emerald-500">
          404
        </h1>

        <h2 className="text-3xl font-bold text-emerald-700 mt-4">
          Página não encontrada
        </h2>

        <p className="text-emerald-500 mt-4">
          A página que você tentou acessar não existe ou foi removida.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-emerald-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold"
        >
          <FaHome />
          Voltar para Home
        </Link>

      </div>
    </div>
  );
}

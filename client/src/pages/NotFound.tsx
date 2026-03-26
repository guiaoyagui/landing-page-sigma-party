import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-6">
          Página não encontrada
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Desculpe, a página que você procura não existe.
        </p>
        <button
          onClick={handleGoHome}
          className="btn-premium"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[70vh]">
      <div className="mb-6">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <div className="w-16 h-1 bg-amber-500 mx-auto my-4"></div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4 text-gray-900">Página Não Encontrada</h2>
      <p className="text-gray-600 max-w-md mb-8">
        A página que você está procurando pode ter sido removida, mudou de nome ou está temporariamente indisponível.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" asChild>
          <Link to="/">Voltar para Home</Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="/contato">Entrar em Contato</Link>
        </Button>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar rolagem para mudar aparência do cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 shadow-md py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/assets/logo.svg" 
            alt="AmberStone Logo" 
            className="h-10 w-auto" 
          />
          <span className={`font-bold text-xl ${isScrolled ? "text-primary" : "text-white"}`}>
            AmberStone
          </span>
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:bg-gray-100 hover:text-primary"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
          <Button 
            variant="default" 
            size="sm" 
            className="ml-4 bg-amber-500 hover:bg-amber-600"
            asChild
          >
            <Link to="/contato">Solicitar Orçamento</Link>
          </Button>
        </nav>

        {/* Botão de menu para mobile */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? "text-gray-900" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="w-full mt-4 bg-amber-500 hover:bg-amber-600"
              asChild
            >
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
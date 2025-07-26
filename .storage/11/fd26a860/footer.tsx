import { Link } from "react-router-dom";
import { navigationItems, companyInfo } from "@/lib/constants";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Informações da empresa */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/assets/logo.svg" alt="AmberStone Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl text-white">AmberStone</span>
            </Link>
            <p className="text-gray-300 text-sm mt-2 max-w-xs">
              {companyInfo.slogan}
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href={companyInfo.socialMedia.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href={companyInfo.socialMedia.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={companyInfo.socialMedia.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-300 hover:text-white transition-colors">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.403 5.633C16.452 3.756 13.804 2.708 10.998 2.708C5.251 2.708 0.581 7.377 0.584 13.123C0.585 14.877 1.042 16.579 1.921 18.066L0.5 23.5L6.065 22.115C7.497 22.911 9.103 23.333 10.743 23.334H10.747C16.495 23.334 21.165 18.664 21.167 12.919C21.168 10.115 20.121 7.468 18.403 5.633ZM10.998 21.54H10.995C9.518 21.539 8.069 21.131 6.817 20.361L6.525 20.186L3.126 21.014L3.974 17.71L3.781 17.408C2.936 16.102 2.49 14.61 2.489 13.121C2.487 8.367 6.243 4.503 11.001 4.503C13.318 4.504 15.521 5.378 17.151 6.929C18.781 8.479 19.652 10.683 19.651 12.998C19.649 17.754 15.893 21.54 10.998 21.54ZM16.032 15.272C15.772 15.142 14.439 14.487 14.201 14.402C13.964 14.317 13.791 14.274 13.619 14.534C13.447 14.794 12.93 15.402 12.778 15.574C12.625 15.747 12.473 15.768 12.213 15.638C11.953 15.508 11.077 15.225 10.046 14.305C9.238 13.584 8.685 12.694 8.532 12.434C8.38 12.174 8.517 12.032 8.648 11.9C8.767 11.781 8.911 11.59 9.042 11.437C9.173 11.285 9.215 11.174 9.301 11.001C9.386 10.829 9.344 10.676 9.279 10.546C9.215 10.416 8.665 9.083 8.45 8.563C8.241 8.059 8.029 8.129 7.869 8.121C7.716 8.114 7.543 8.113 7.371 8.113C7.198 8.113 6.919 8.178 6.682 8.438C6.444 8.698 5.746 9.352 5.746 10.685C5.746 12.018 6.697 13.308 6.828 13.48C6.958 13.653 8.677 16.291 11.3 17.463C11.9 17.723 12.369 17.873 12.738 17.987C13.349 18.176 13.904 18.154 14.343 18.088C14.835 18.014 15.903 17.439 16.118 16.835C16.333 16.231 16.333 15.71 16.268 15.574C16.203 15.438 16.031 15.359 15.771 15.229L16.032 15.272Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links de navegação */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Navegação</h3>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Phone size={18} className="mt-0.5 text-gray-400" />
                <span>{companyInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <Mail size={18} className="mt-0.5 text-gray-400" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={18} className="mt-0.5 text-gray-400" />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-amber-400">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Segunda a Sexta: 8h às 18h</li>
              <li>Sábado: 8h às 12h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} AmberStone. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              Desenvolvido com ♥ no Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { services } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
  const location = useLocation();
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    // Checar se há um hash na URL para navegar até um serviço específico
    if (location.hash) {
      const serviceId = location.hash.substring(1); // Remover o # do início
      setActiveService(serviceId);
      
      // Scroll para a seção do serviço após um pequeno delay para garantir que os elementos foram renderizados
      setTimeout(() => {
        const element = document.getElementById(serviceId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1620641788251-4f623809ad2d?q=80&w=2070')", 
            filter: "brightness(0.7)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Nossos Serviços
          </h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">
            Conheça nossos serviços especializados de instalação e montagem de pedras ornamentais
          </p>
        </div>
      </section>

      {/* Navegação de Serviços */}
      <section className="bg-white py-8 sticky top-16 z-30 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {services.map((service) => (
              <Button
                key={service.id}
                variant={activeService === service.id ? "default" : "outline"}
                onClick={() => {
                  setActiveService(service.id);
                  document.getElementById(service.id)?.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                  });
                }}
                className="transition-all"
              >
                {service.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes dos Serviços */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                id={service.id}
                key={service.id} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">{service.title}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">O que inclui:</h3>
                    <p className="text-gray-700">
                      {service.details}
                    </p>
                  </div>
                  <Button asChild>
                    <Link to="/contato">Solicitar Orçamento</Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "md:col-start-1" : ""} h-96`}>
                  <img 
                    src={service.image.replace('/assets', `https://images.unsplash.com/photo-${1600585152220 + index * 1000}-90363fe7e115?q=80&w=2070`)} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg object-cover w-full h-full" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Nosso Processo de Trabalho</h2>
            <p className="text-gray-600">
              Entenda como funciona nosso fluxo de trabalho desde o primeiro contato até a conclusão do projeto
            </p>
          </div>

          <div className="relative">
            {/* Linha do tempo conectando as etapas */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -ml-0.5 z-0"></div>
            
            <div className="space-y-12 relative">
              {[
                {
                  title: "Primeiro Contato e Consulta",
                  description: "Entendemos suas necessidades, expectativas e orçamento para o projeto.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                    </svg>
                  )
                },
                {
                  title: "Visita Técnica e Medição",
                  description: "Nossa equipe técnica realiza uma visita para medição precisa e avaliação do ambiente.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                  )
                },
                {
                  title: "Escolha dos Materiais",
                  description: "Apresentamos as opções de pedras e auxiliamos na escolha dos materiais ideais para seu projeto.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 9-2 2 2 2"></path><path d="m15 9 2 2-2 2"></path><path d="M3 8h.01"></path><path d="M7 8h.01"></path><path d="M11 8h.01"></path><path d="M15 8h.01"></path><path d="M19 8h.01"></path><path d="M3 12h.01"></path><path d="M7 12h.01"></path><path d="M11 12h.01"></path><path d="M15 12h.01"></path><path d="M19 12h.01"></path><path d="M3 16h.01"></path><path d="M7 16h.01"></path><path d="M11 16h.01"></path><path d="M15 16h.01"></path><path d="M19 16h.01"></path>
                    </svg>
                  )
                },
                {
                  title: "Orçamento Detalhado",
                  description: "Apresentamos um orçamento completo com todos os detalhes do projeto, materiais e serviços.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                    </svg>
                  )
                },
                {
                  title: "Produção e Preparo",
                  description: "Realizamos o corte, acabamento e preparo das peças conforme as especificações do projeto.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18.36 6.64A9 9 0 0 1 20.77 15"></path><path d="M6.16 6.16a9 9 0 1 0 12.68 12.68"></path><path d="M12 2v4"></path><path d="M2 12h4"></path>
                    </svg>
                  )
                },
                {
                  title: "Instalação e Acabamento",
                  description: "Nossa equipe especializada realiza a instalação com o máximo de cuidado e precisão.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 12a3 3 0 1 1-3.999-2.83V6"></path><path d="M10.168 7.111a4 4 0 0 1 7.664 0"></path><path d="M7 16.17V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2.17"></path><path d="M11 17h2"></path><path d="M3 3v18h18"></path>
                    </svg>
                  )
                },
                {
                  title: "Entrega e Pós-Venda",
                  description: "Realizamos a entrega final com orientações de cuidados e manutenção, garantindo sua satisfação.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path><path d="m16 11 2 2 4-4"></path><path d="M8 12 l-2 2-4-4"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z"></path>
                    </svg>
                  )
                }
              ].map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center`}>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                  <div className="md:w-auto flex justify-center my-4 md:my-0 z-10">
                    <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Pronto para transformar seu espaço?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Entre em contato conosco e descubra como nossos serviços de instalação e montagem podem valorizar seu projeto.
            </p>
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
              <Link to="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
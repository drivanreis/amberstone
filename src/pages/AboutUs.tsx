import { Card, CardContent } from "@/components/ui/card";
import { aboutInfo } from "@/lib/constants";

export default function AboutUs() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('/images/Serenity.jpg')", 
            filter: "brightness(0.7)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Sobre Nós
          </h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">
            Conheça nossa história, missão e valores que orientam nosso trabalho na AmberStone
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa História</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {aboutInfo.history}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary block">2005</span>
                  <span className="text-sm text-gray-600">Ano de Fundação</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary block">100+</span>
                  <span className="text-sm text-gray-600">Projetos por Ano</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary block">30+</span>
                  <span className="text-sm text-gray-600">Profissionais</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <span className="text-3xl font-bold text-primary block">50+</span>
                  <span className="text-sm text-gray-600">Tipos de Pedras</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1609259886986-7103d36e25ac?q=80&w=1974" 
                  alt="História da AmberStone" 
                  className="rounded-lg h-40 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=2070" 
                  alt="Equipe AmberStone" 
                  className="rounded-lg h-64 w-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1607473128383-0cf6c96f0689?q=80&w=1973" 
                  alt="Produtos AmberStone" 
                  className="rounded-lg h-64 w-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1620641622476-e0714c539295?q=80&w=2074" 
                  alt="Instalação AmberStone" 
                  className="rounded-lg h-40 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Missão, Visão e Valores</h2>
            <p className="text-gray-600">
              Nossos princípios fundamentais que guiam nosso trabalho e relacionamento com clientes e parceiros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Missão</h3>
                <p className="text-gray-600">{aboutInfo.mission}</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-amber-500">
              <CardContent className="pt-6">
                <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Visão</h3>
                <p className="text-gray-600">{aboutInfo.vision}</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-green-600">
              <CardContent className="pt-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <path d="M2 12h20"></path><path d="M12 2v20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Valores</h3>
                <ul className="text-gray-600 space-y-2">
                  {aboutInfo.values.map((value, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="bg-green-100 text-green-600 rounded-full flex items-center justify-center w-5 h-5 mt-0.5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Diferenciais</h2>
            <p className="text-gray-600">
              O que nos torna únicos no mercado de pedras ornamentais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutInfo.differentials.map((differential, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{index + 1}</span>
                </div>
                <p className="text-gray-700 font-medium">{differential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe ou Estrutura */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa Estrutura</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Contamos com um parque industrial moderno e tecnológico, com maquinários de última geração para garantir cortes precisos e acabamentos perfeitos. Nossa estrutura inclui:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Teares de última geração</span> - Para corte preciso de blocos em chapas
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Politrizes automáticas</span> - Para acabamento perfeito das superfícies
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Laboratório de controle de qualidade</span> - Para garantir a excelência dos produtos
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    <span className="font-medium">Showroom completo</span> - Para que nossos clientes possam visualizar todas as opções disponíveis
                  </p>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1579444741963-5ae219cfe27c?q=80&w=2070" 
                alt="Instalações AmberStone" 
                className="rounded-lg col-span-2 h-48 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070" 
                alt="Maquinário AmberStone" 
                className="rounded-lg h-40 w-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070" 
                alt="Showroom AmberStone" 
                className="rounded-lg h-40 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
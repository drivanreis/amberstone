import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { companyInfo, services, productCategories } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1575013421515-9178ff0c945d?q=80&w=2070')", 
            filter: "brightness(0.6)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              {companyInfo.slogan}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-xl">
              Especialistas em pedras ornamentais como calcários, mármores e granitos para seu projeto
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
                <Link to="/produtos">Ver Produtos</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="flex space-x-3">
            <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
            <div className="w-3 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-60"></div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Resumo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070" 
                alt="Pedras ornamentais da AmberStone" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-6 rounded-lg shadow-lg hidden md:block">
                <p className="text-2xl font-bold text-white">+15</p>
                <p className="text-white text-sm">Anos de experiência</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Sobre a AmberStone</h2>
              <p className="text-gray-700 mb-6">
                Somos uma empresa especializada em pedras ornamentais de alta qualidade, com mais de 15 anos de experiência no mercado. Nossa paixão por materiais naturais nos motiva a oferecer as melhores soluções para projetos residenciais e comerciais.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Vasta seleção de pedras nacionais e importadas",
                  "Equipe técnica altamente especializada",
                  "Projetos personalizados para cada cliente",
                  "Compromisso com qualidade e pontualidade"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="text-green-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/sobre" className="flex items-center gap-2">
                  Conheça Nossa História <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-gray-600">
              Oferecemos serviços completos desde a seleção até a instalação de pedras ornamentais, garantindo um acabamento perfeito para seu projeto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-48 rounded-t-lg overflow-hidden">
                    <img 
                      src={service.image.replace('/assets', 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2069')} 
                      alt={service.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="outline" size="sm" asChild className="w-full mt-auto">
                    <Link to={`/servicos#${service.id}`}>Ver Detalhes</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-gray-600">
              Explore nossa variedade de produtos em pedras naturais para transformar seus espaços
            </p>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent>
              {productCategories.slice(0, 6).map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-md h-full">
                    <div className="h-60 overflow-hidden">
                      <img 
                        src={product.image.replace('/assets', 'https://images.unsplash.com/photo-1599619585752-c3edb42a414c?q=80&w=2071')} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          
          <div className="flex justify-center mt-8">
            <Button size="lg" asChild className="px-8">
              <Link to="/produtos">Ver Todos os Produtos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070')" }} 
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transforme seu projeto com o que há de melhor em pedras ornamentais
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Entre em contato conosco e descubra como podemos elevar o nível do seu projeto com nossas pedras de alta qualidade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
                <Link to="/contato">Solicitar Orçamento</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <Link to="/contato">Agendar Visita</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
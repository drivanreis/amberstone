import { useState } from "react";
import { productCategories } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(productCategories[0]?.id || null);

  const getRandomStoneColors = () => {
    const colors = [
      "Branco", "Preto", "Cinza", "Bege", "Marrom", "Verde", "Azul", "Vermelho", "Rosa", "Amarelo"
    ];
    const stoneTypes = [
      "Mármore", "Granito", "Quartzito", "Limestone", "Onix", "Travertino"
    ];

    // Gera uma lista aleatória de pedras para cada categoria de produto
    return Array.from({ length: 6 }, (_, i) => {
      const type = stoneTypes[Math.floor(Math.random() * stoneTypes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      return `${type} ${color} ${i + 1}`;
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2070')", 
            filter: "brightness(0.7)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Nossos Produtos
          </h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">
            Explore nossa ampla variedade de produtos em pedras ornamentais para todos os ambientes
          </p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pedras Ornamentais para Todos os Projetos</h2>
            <p className="text-gray-700 mb-6">
              Na AmberStone, trabalhamos com uma ampla variedade de pedras ornamentais selecionadas cuidadosamente para atender às diferentes necessidades estéticas e funcionais de cada projeto. Nossa coleção inclui peças nacionais e importadas, garantindo beleza, durabilidade e exclusividade para sua residência ou ambiente comercial.
            </p>
            <p className="text-gray-700">
              Explore abaixo nossas categorias de produtos e descubra as diversas possibilidades de aplicação das pedras naturais.
            </p>
          </div>
        </div>
      </section>

      {/* Produtos por Categoria */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue={productCategories[0]?.id} 
            value={selectedCategory || undefined}
            onValueChange={(value) => setSelectedCategory(value)}
            className="w-full"
          >
            <div className="border-b mb-8 overflow-x-auto">
              <TabsList className="inline-flex w-max">
                {productCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="text-base py-3 px-5"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid grid-cols-1 gap-8 mb-12">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-gray-900">{category.name}</h2>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                        <h3 className="font-semibold text-gray-900 mb-2">Aplicações:</h3>
                        <p className="text-gray-700">
                          {category.id === 'blocos' && 'Ideal para projetos de grande escala, construções e obras públicas.'}
                          {category.id === 'chapas' && 'Perfeitas para revestimentos de paredes, pisos, bancadas e tampos.'}
                          {category.id === 'ladrilhos' && 'Excelente opção para pisos e revestimentos internos e externos.'}
                          {category.id === 'soleiras' && 'Utilizadas para marcar a transição entre ambientes ou revestimentos.'}
                          {category.id === 'rodapes' && 'Acabamento elegante entre piso e parede, protegendo contra umidade.'}
                          {category.id === 'balcoes' && 'Solução funcional e estética para cozinhas e áreas comerciais.'}
                          {category.id === 'bancadas' && 'Superfícies resistentes e elegantes para cozinhas e banheiros.'}
                          {category.id === 'divisorias' && 'Elementos arquitetônicos para separação de ambientes com elegância.'}
                          {category.id === 'pias' && 'Opções personalizadas para cozinhas e banheiros com alta durabilidade.'}
                          {category.id === 'prateleiras' && 'Soluções de armazenamento elegantes para diversos ambientes.'}
                        </p>
                      </div>
                      <Button asChild>
                        <Link to="/contato">Solicitar Orçamento</Link>
                      </Button>
                    </div>
                    <div className="h-80">
                      <img 
                        src={category.image.replace('/assets', `https://images.unsplash.com/photo-${1580116270927 + parseInt(category.id.length.toString()) * 1000}-5a9c17974c0f?q=80&w=2070`)} 
                        alt={category.name} 
                        className="rounded-lg shadow-lg object-cover w-full h-full" 
                      />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6">Tipos de Pedras Disponíveis</h3>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {getRandomStoneColors().map((stone, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="h-48 bg-gray-200 overflow-hidden">
                        <img 
                          src={`https://images.unsplash.com/photo-${1575719049840 + index * 10000}-7a6c934713b1?q=80&w=2069`} 
                          alt={stone} 
                          className="w-full h-full object-cover transition-transform hover:scale-105" 
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{stone}</CardTitle>
                        <CardDescription>
                          {category.id === 'blocos' && 'Bloco bruto para serragem'}
                          {category.id === 'chapas' && 'Chapa polida'}
                          {category.id === 'ladrilhos' && 'Ladrilho polido'}
                          {category.id === 'soleiras' && 'Soleira padrão'}
                          {category.id === 'rodapes' && 'Rodapé com acabamento'}
                          {category.id === 'balcoes' && 'Balcão personalizado'}
                          {category.id === 'bancadas' && 'Bancada com borda dupla'}
                          {category.id === 'divisorias' && 'Divisória personalizada'}
                          {category.id === 'pias' && 'Pia esculpida'}
                          {category.id === 'prateleiras' && 'Prateleira com acabamento'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link to="/contato">Consultar Disponibilidade</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200 mb-12">
                  <h3 className="font-semibold text-gray-900 mb-4">Acabamentos Disponíveis</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "Polido", desc: "Superfície lisa e brilhante" },
                      { name: "Levigado", desc: "Superfície lisa sem brilho" },
                      { name: "Flameado", desc: "Superfície texturizada por chama" },
                      { name: "Escovado", desc: "Superfície levemente texturizada" },
                      { name: "Jateado", desc: "Superfície fosca e áspera" },
                      { name: "Leather", desc: "Textura que lembra couro" },
                      { name: "Apicoado", desc: "Superfície com pequenos pontos" },
                      { name: "Anticato", desc: "Aparência envelhecida" }
                    ].map((finish, index) => (
                      <div key={index} className="p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-gray-900">{finish.name}</h4>
                        <p className="text-sm text-gray-600">{finish.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Vantagens das Pedras Naturais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Vantagens das Pedras Naturais</h2>
            <p className="text-gray-600">
              Por que escolher pedras naturais para seus projetos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Durabilidade",
                description: "As pedras naturais são conhecidas por sua excepcional durabilidade, podendo durar por gerações quando bem mantidas.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22v-7l-2-2"></path><path d="M10 7V2"></path><path d="M7 10H2"></path><path d="M22 7v14H7"></path><path d="M22 7H10"></path>
                  </svg>
                )
              },
              {
                title: "Valor Agregado",
                description: "Investir em pedras naturais valoriza seu imóvel, agregando valor e sofisticação ao ambiente.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20"></path><path d="m4.93 10 6.5-6.5"></path><path d="m17.07 10-6.5-6.5"></path><path d="M4.93 14 18 14"></path><path d="M4.93 14 11.43 20.5"></path><path d="M17.07 14 10.57 20.5"></path>
                  </svg>
                )
              },
              {
                title: "Peças Únicas",
                description: "Cada pedra é única em sua formação, cor e veios, garantindo exclusividade para seu projeto.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                )
              },
              {
                title: "Resistência",
                description: "Alta resistência a riscos, calor, umidade e desgaste, ideais para áreas de grande circulação.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                )
              },
              {
                title: "Sustentabilidade",
                description: "Material natural, renovável e de baixo impacto ambiental quando comparado a materiais industrializados.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20"></path><path d="M12 2v20"></path><path d="M12 2c4.4 0 8 3.6 8 8"></path><path d="M12 2c-4.4 0-8 3.6-8 8"></path><path d="M12 22c4.4 0 8-3.6 8-8"></path><path d="M12 22c-4.4 0-8-3.6-8-8"></path>
                  </svg>
                )
              },
              {
                title: "Versatilidade",
                description: "Adaptam-se a diversos estilos de decoração, do clássico ao contemporâneo, em variados ambientes.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                )
              }
            ].map((advantage, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-primary">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Não encontrou o que procura?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Entre em contato conosco e descubra todas as possibilidades de pedras naturais para seu projeto. Temos especialistas prontos para atendê-lo.
            </p>
            <Button size="lg" className="bg-white text-amber-500 hover:bg-gray-100" asChild>
              <Link to="/contato">Fale com um Especialista</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useState } from "react";
import { faqItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqItems);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setFilteredFAQs(faqItems);
    } else {
      const filtered = faqItems.filter(
        item => 
          item.question.toLowerCase().includes(query) || 
          item.answer.toLowerCase().includes(query)
      );
      setFilteredFAQs(filtered);
    }
  };

  // Agrupar perguntas por categorias
  const categorizedFAQs = filteredFAQs.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof faqItems>);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1604881991720-f91add269bed?q=80&w=2071')", 
            filter: "brightness(0.7)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">
            Encontre respostas para as dúvidas mais comuns sobre nossos produtos e serviços
          </p>
        </div>
      </section>

      {/* Pesquisa */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <Input
                type="search"
                placeholder="Buscar perguntas frequentes..."
                className="pl-10 py-6 text-base"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion de FAQs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Nenhum resultado encontrado para "{searchQuery}"
                </h3>
                <p className="text-gray-600 mb-8">
                  Tente buscar por termos diferentes ou entre em contato conosco para mais informações.
                </p>
                <Button asChild>
                  <Link to="/contato">Entrar em Contato</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-10">
                {Object.entries(categorizedFAQs).map(([category, items]) => (
                  <div key={category}>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">{category}</h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {items.map((item, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`faq-${category}-${index}`}
                          className="bg-white border rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left">
                            <span className="font-medium">{item.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-700 leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Não encontrou a resposta que procurava?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Nossa equipe está pronta para ajudar e esclarecer todas as suas dúvidas sobre produtos, serviços ou orçamentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
                <Link to="/contato">Entrar em Contato</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                <a href={`https://wa.me/${companyInfo.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
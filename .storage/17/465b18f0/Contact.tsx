import { useState } from "react";
import { companyInfo } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio de formulário
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Em breve entraremos em contato.", {
        description: `Obrigado pelo seu contato, ${formData.name}.`,
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070')", 
            filter: "brightness(0.7)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-white/90 text-center max-w-2xl">
            Estamos prontos para atender sua solicitação e tirar todas as suas dúvidas
          </p>
        </div>
      </section>

      {/* Informações de Contato + Formulário */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Informações de Contato</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Estamos à disposição para atender você e fornecer todas as informações necessárias sobre nossos produtos e serviços. Entre em contato conosco pelos canais abaixo ou preencha o formulário.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-primary">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Telefone</h3>
                      <p className="text-gray-600">{companyInfo.phone}</p>
                      <p className="text-gray-600 text-sm mt-1">De segunda a sexta, das 8h às 18h</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">E-mail</h3>
                      <p className="text-gray-600">{companyInfo.email}</p>
                      <p className="text-gray-600 text-sm mt-1">Responderemos em até 24 horas úteis</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Endereço</h3>
                      <p className="text-gray-600">{companyInfo.address}</p>
                      <p className="text-gray-600 text-sm mt-1">Visite nossa loja e showroom</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-primary">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Horário de Funcionamento</h3>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-gray-600">Sábado: 8h às 12h</p>
                      <p className="text-gray-600">Domingo: Fechado</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Envie uma Mensagem</h2>
              <p className="text-gray-700 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo*</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail*</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone*</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(XX) XXXXX-XXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto*</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Assunto da sua mensagem"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem*</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escreva sua mensagem aqui..."
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa ou Local (placeholder) */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Nossa Localização</h2>
            <p className="text-gray-600 mt-2">Visite nossa loja e showroom</p>
          </div>
          <div className="bg-gray-300 h-[400px] rounded-lg overflow-hidden relative">
            {/* Aqui seria inserido um mapa real com a API do Google Maps ou similar */}
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <MapPin size={48} className="text-gray-500 mb-4" />
              <p className="text-gray-700 font-medium">{companyInfo.address}</p>
              <p className="text-gray-500 text-sm mt-2">Mapa indisponível no momento</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
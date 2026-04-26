import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "(21) 99639-1963",
    link: "https://wa.me/5521996391963",
    description: "Atendimento rápido e direto",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@guaratiba.autocenter",
    link: "https://instagram.com/guaratiba.autocenter",
    description: "Siga-nos nas redes sociais",
  },
  {
    icon: Clock,
    title: "Horário de Funcionamento",
    value: "Seg - Sex: 8h às 18h | Sáb: 8h às 13h",
    description: "Atendimento em horário comercial",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "Estrada da Matriz, 536 – Pedra de Guaratiba",
    link: "https://www.google.com/maps/search/?api=1&query=Estrada+da+Matriz+536+Pedra+de+Guaratiba+Rio+de+Janeiro",
    description: "Rio de Janeiro - RJ",
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
            Entre em Contato Conosco
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Estamos prontos para atender você. Escolha a forma de contato que 
            preferir e fale conosco agora mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info) => (
            <Card key={info.title} className="bg-card border-border text-center">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-sm">{info.value}</p>
                )}
                <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Endereço em destaque */}
        <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0">
              <MapPin className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-1">Nosso Endereço</p>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Estrada da Matriz, 536 – Pedra de Guaratiba
              </h3>
              <p className="text-muted-foreground mt-1">Rio de Janeiro - RJ</p>
            </div>
            <Button 
              asChild 
              className="md:ml-auto bg-primary hover:bg-primary/90"
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=Estrada+da+Matriz+536+Pedra+de+Guaratiba+Rio+de+Janeiro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Como Chegar
              </a>
            </Button>
          </div>
        </div>

        {/* Mapa integrado */}
        <div className="rounded-2xl overflow-hidden border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.5!2d-43.62!3d-23.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAzJzAwLjAiUyA0M8KwMzcnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Estrada+da+Matriz+536+Pedra+de+Guaratiba+Rio+de+Janeiro"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Guaratiba Auto Center - Estrada da Matriz, 536"
            className="grayscale-[30%] contrast-110"
          />
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            asChild
            className="bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8 py-6 text-lg"
          >
            <a
              href="https://wa.me/5521996391963?text=Olá! Vim pelo site e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Fale Conosco pelo WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

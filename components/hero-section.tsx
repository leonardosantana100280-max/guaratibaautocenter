import { Phone, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Mais de 30 anos de experiência</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Seu Carro em{" "}
            <span className="text-primary">Boas Mãos</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            Há mais de três décadas oferecendo serviços automotivos de qualidade. 
            Confie em quem entende do seu veículo como ninguém.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/5521996391963?text=Olá! Gostaria de agendar um serviço."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Serviço
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
            >
              <a
                href="https://wa.me/5521996391963?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { number: "30+", label: "Anos de Experiência" },
              { number: "10k+", label: "Clientes Atendidos" },
              { number: "100%", label: "Satisfação" },
              { number: "24h", label: "Suporte" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronRight className="h-8 w-8 rotate-90" />
        </a>
      </div>
    </section>
  )
}

import { 
  Car, 
  Disc, 
  Droplets, 
  Settings, 
  Gauge, 
  Battery, 
  Thermometer, 
  Zap,
  Phone
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Car,
    title: "Suspensão",
    description: "Diagnóstico e reparo completo do sistema de suspensão. Amortecedores, molas, buchas, pivôs e terminais.",
  },
  {
    icon: Disc,
    title: "Freios",
    description: "Manutenção preventiva e corretiva do sistema de freios. Pastilhas, discos, fluído e ajustes.",
  },
  {
    icon: Droplets,
    title: "Troca de Óleo",
    description: "Troca de óleo do motor e filtros com produtos de qualidade. Lubrificação completa do veículo.",
  },
  {
    icon: Settings,
    title: "Revisão Completa",
    description: "Check-up completo do seu veículo. Verificação de todos os sistemas e componentes essenciais.",
  },
  {
    icon: Gauge,
    title: "Alinhamento e Balanceamento",
    description: "Alinhamento de direção e balanceamento de rodas com equipamentos de última geração.",
  },
  {
    icon: Battery,
    title: "Sistema Elétrico",
    description: "Diagnóstico e reparo de problemas elétricos. Bateria, alternador, motor de partida e fiação.",
  },
  {
    icon: Thermometer,
    title: "Ar Condicionado",
    description: "Manutenção e recarga do ar condicionado automotivo. Limpeza do sistema e verificação de vazamentos.",
  },
  {
    icon: Zap,
    title: "Injeção Eletrônica",
    description: "Diagnóstico computadorizado e limpeza do sistema de injeção eletrônica. Scanner automotivo.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
            Soluções Completas Para Seu Veículo
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Oferecemos uma ampla gama de serviços automotivos para manter seu carro 
            sempre em perfeitas condições. Qualidade e confiança em cada reparo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card 
              key={service.title} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Não encontrou o serviço que procura? Entre em contato conosco!
          </p>
          <Button
            size="lg"
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href="https://wa.me/5521996391963?text=Olá! Gostaria de saber mais sobre os serviços."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-5 w-5" />
              Fale Conosco
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

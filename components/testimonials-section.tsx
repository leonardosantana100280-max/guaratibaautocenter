import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Carlos Eduardo",
    vehicle: "Toyota Corolla 2022",
    rating: 5,
    text: "Excelente atendimento! Levei meu carro para revisão e ficou impecável. Preço justo e serviço de qualidade. Recomendo demais a Guaratiba Auto Center.",
  },
  {
    name: "Mariana Silva",
    vehicle: "Honda HR-V 2021",
    rating: 5,
    text: "Já sou cliente há mais de 5 anos. Sempre fui muito bem atendida e nunca tive problemas com os serviços. Profissionais de confiança!",
  },
  {
    name: "Roberto Almeida",
    vehicle: "Volkswagen Golf 2020",
    rating: 5,
    text: "Fiz a troca de suspensão completa e o trabalho ficou perfeito. O carro ficou como novo! Preço competitivo e mão de obra impecável.",
  },
  {
    name: "Fernanda Costa",
    vehicle: "Hyundai HB20 2023",
    rating: 5,
    text: "Atendimento rápido e eficiente. Resolveram o problema do meu carro no mesmo dia. Transparência total no orçamento. Super indico!",
  },
  {
    name: "Paulo Henrique",
    vehicle: "Fiat Toro 2022",
    rating: 5,
    text: "Oficina de confiança com mais de 30 anos de experiência. Isso faz toda diferença! Equipe competente e preços honestos.",
  },
  {
    name: "Ana Beatriz",
    vehicle: "Chevrolet Onix 2021",
    rating: 5,
    text: "Meu mecânico de confiança há anos. Sempre me explicam tudo que vai ser feito e dão opções de peças. Recomendo para todos!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A satisfação dos nossos clientes é nossa maior recompensa. Confira o que 
            eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed pl-4">
                    {testimonial.text}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

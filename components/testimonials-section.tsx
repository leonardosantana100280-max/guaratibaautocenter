import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Marcos da Silva",
    vehicle: "Fiat Uno 2018",
    rating: 5,
    text: "Meu Uno tava com barulho na suspensão há meses. Trouxe aqui e resolveram rapidinho, com peça de qualidade e preço justo. Já virei cliente fixo!",
  },
  {
    name: "Dona Cláudia",
    vehicle: "Chevrolet Onix 2020",
    rating: 5,
    text: "Sou cliente há mais de 10 anos, desde quando tinha meu Corsa. Confiança total! Sempre explicam tudo direitinho antes de fazer qualquer serviço.",
  },
  {
    name: "Wellington Santos",
    vehicle: "Volkswagen Gol G6 2016",
    rating: 5,
    text: "Troquei a embreagem do meu Gol e ficou show. O carro parece que saiu da concessionária. Preço honesto e trabalho bem feito.",
  },
  {
    name: "Patrícia Oliveira",
    vehicle: "Hyundai HB20 2019",
    rating: 5,
    text: "Vim fazer revisão dos freios e descobriram outros problemas que nem tinha percebido. Foram honestos e o orçamento coube no bolso. Recomendo demais!",
  },
  {
    name: "Seu Jorge",
    vehicle: "Fiat Strada 2017",
    rating: 5,
    text: "Uso minha Strada pro trabalho e não posso ficar parado. Aqui resolvem no mesmo dia sempre que possível. Mais de 30 anos de experiência não é à toa!",
  },
  {
    name: "Amanda Ferreira",
    vehicle: "Renault Kwid 2021",
    rating: 5,
    text: "Primeira vez que vim e já me conquistaram. Atendimento excelente, explicaram tudinho sobre a troca de óleo e filtros. Voltarei com certeza!",
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

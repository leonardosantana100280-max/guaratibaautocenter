import { Shield, Target, Eye, Award, Users, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description: "Transparência em todos os serviços e orçamentos",
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Peças e serviços de primeira linha",
  },
  {
    icon: Users,
    title: "Compromisso",
    description: "Relacionamento duradouro com nossos clientes",
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
              Tradição e Excelência em Serviços Automotivos
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Guaratiba Auto Center nasceu há mais de 30 anos com um objetivo claro: 
              oferecer serviços automotivos de qualidade com atendimento personalizado. 
              Nossa história é marcada pela dedicação e compromisso com cada cliente 
              que confia seu veículo aos nossos cuidados.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com uma equipe de profissionais experientes e equipamentos modernos, 
              garantimos diagnósticos precisos e reparos eficientes. Somos reconhecidos 
              pela honestidade, transparência nos orçamentos e pela qualidade dos 
              serviços prestados.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center p-4">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Nossa Missão</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Proporcionar soluções automotivas completas com excelência, 
                      garantindo a segurança e satisfação dos nossos clientes através 
                      de serviços de alta qualidade e atendimento humanizado.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Nossa Visão</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser referência em serviços automotivos na região de Guaratiba, 
                      reconhecidos pela qualidade, confiabilidade e pelo relacionamento 
                      de longo prazo construído com cada cliente.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Nossos Valores</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Honestidade, transparência, respeito ao cliente, compromisso 
                      com a qualidade e busca constante pela excelência em tudo 
                      que fazemos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

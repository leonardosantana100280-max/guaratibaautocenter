"use client"

import { useState } from "react"
import { Send, MessageCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const serviceOptions = [
  "Suspensão",
  "Freios",
  "Troca de Óleo",
  "Revisão Completa",
  "Alinhamento e Balanceamento",
  "Sistema Elétrico",
  "Ar Condicionado",
  "Injeção Eletrônica",
  "Outro",
]

export function QuoteSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    veiculo: "",
    servico: "",
    mensagem: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleWhatsAppSubmit = () => {
    const message = `*Solicitação de Orçamento*%0A%0A*Nome:* ${formData.nome}%0A*Telefone:* ${formData.telefone}%0A*Veículo:* ${formData.veiculo}%0A*Serviço:* ${formData.servico}%0A*Mensagem:* ${formData.mensagem}`
    window.open(`https://wa.me/5521996391963?text=${message}`, "_blank")
  }

  return (
    <section id="orcamento" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Orçamento e Agendamento
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
              Solicite Seu Orçamento Sem Compromisso
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Preencha o formulário ao lado ou entre em contato diretamente pelo 
              WhatsApp. Responderemos o mais rápido possível com um orçamento 
              detalhado e sem compromisso.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Orçamento Gratuito</h3>
                  <p className="text-muted-foreground text-sm">Sem custos e sem compromisso</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Resposta Rápida</h3>
                  <p className="text-muted-foreground text-sm">Retornamos em até 2 horas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Agendamento Flexível</h3>
                  <p className="text-muted-foreground text-sm">Horários que cabem na sua rotina</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                asChild
                className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              >
                <a
                  href="https://wa.me/5521996391963?text=Olá! Gostaria de agendar um serviço."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Formulário de Orçamento</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleWhatsAppSubmit(); }}>
                <div className="space-y-2">
                  <label htmlFor="nome" className="text-sm font-medium text-foreground">
                    Nome Completo
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefone" className="text-sm font-medium text-foreground">
                    Telefone / WhatsApp
                  </label>
                  <Input
                    id="telefone"
                    name="telefone"
                    type="tel"
                    placeholder="(21) 99999-9999"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="veiculo" className="text-sm font-medium text-foreground">
                    Veículo (Marca/Modelo/Ano)
                  </label>
                  <Input
                    id="veiculo"
                    name="veiculo"
                    placeholder="Ex: Honda Civic 2020"
                    value={formData.veiculo}
                    onChange={handleChange}
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="servico" className="text-sm font-medium text-foreground">
                    Serviço Desejado
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Selecione um serviço</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
                    Descreva o Problema ou Serviço
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Conte mais detalhes sobre o que você precisa..."
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows={4}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Solicitação
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Instagram, Phone, MapPin } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#orcamento", label: "Orçamento" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="Guaratiba Auto Center"
                width={200}
                height={70}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Há mais de 30 anos oferecendo serviços automotivos de qualidade. 
              Sua confiança é nosso maior compromisso.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/guaratiba.autocenter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://wa.me/5521996391963"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">WhatsApp</p>
                  <a
                    href="https://wa.me/5521996391963"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    (21) 99639-1963
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Instagram</p>
                  <a
                    href="https://instagram.com/guaratiba.autocenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    @guaratiba.autocenter
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="text-foreground">Guaratiba, Rio de Janeiro - RJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Guaratiba Auto Center. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521996391963?text=Olá! Vim pelo site e gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#25D366]/90 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
    </a>
  )
}

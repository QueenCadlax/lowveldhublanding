import { MessageCircle } from "lucide-react"

const whatsappUrl =
  "https://wa.me/27673749762?text=Hi%20Lowveld%20Hub!%20I'm%20interested%20in%20your%20digital%20services.%20I'd%20like%20to%20discuss%20my%20project."

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact Lowveld Hub on WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_-16px_rgba(37,211,102,0.75)] transition-all hover:-translate-y-0.5 hover:brightness-110 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}

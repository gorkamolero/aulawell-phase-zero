import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export function ContactBar() {
  return (
    <div className="bg-navy text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href="tel:+447123456789"
            className="flex items-center gap-2 hover:text-slate-300 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+44 7123 456789</span>
          </Link>
          
          <Link
            href="mailto:info@aulawellenglish.com"
            className="flex items-center gap-2 hover:text-slate-300 transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>info@aulawellenglish.com</span>
          </Link>
          
          <Link
            href="https://wa.me/447123456789?text=Hi,%20I'm%20interested%20in%20English%20tutoring"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-slate-300 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
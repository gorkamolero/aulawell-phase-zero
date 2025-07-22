import { Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import { CONTACT_INFO } from "@/lib/constants"

export function ContactBar() {
  return (
    <div className="bg-navy text-white py-2">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link
            href={CONTACT_INFO.PHONE_HREF}
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>{CONTACT_INFO.PHONE_DISPLAY}</span>
          </Link>
          
          <Link
            href={`mailto:${CONTACT_INFO.EMAIL}`}
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>{CONTACT_INFO.EMAIL}</span>
          </Link>
          
          <Link
            href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=Hi,%20I'm%20interested%20in%20tutoring`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { CONTACT_INFO } from "@/lib/constants"

export function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=Hi,%20I'm%20interested%20in%20tutoring`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 hover:scale-110 transform"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="white" />
    </Link>
  )
}
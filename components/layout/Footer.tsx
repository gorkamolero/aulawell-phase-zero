import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { CONTACT_INFO } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aulawell Tuition</h3>
            <p className="text-slate-300 mb-4">
              Bespoke tutoring service offering premium tuition to children of all ages and nationalities.
              We help students achieve academic excellence and build confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <a href={CONTACT_INFO.PHONE_HREF} className="text-slate-300 hover:text-white transition-colors">
                  {CONTACT_INFO.PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="text-slate-300 hover:text-white transition-colors">
                  {CONTACT_INFO.EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">{CONTACT_INFO.LOCATION}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center mb-6">
            <p className="text-slate-300 mb-4">Accepted Payment Methods</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <Image
                src="/payment-logos/apple-pay.svg"
                alt="Apple Pay"
                width={50}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/payment-logos/visa.svg"
                alt="Visa"
                width={50}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/payment-logos/mastercard.svg"
                alt="Mastercard"
                width={50}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/payment-logos/google-pay.svg"
                alt="Google Pay"
                width={50}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/payment-logos/paypal.svg"
                alt="PayPal"
                width={50}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
              <Image
                src="/payment-logos/revolut.svg"
                alt="Revolut"
                width={80}
                height={24}
                className="h-6 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
          <div className="text-center text-white/70">
            <p>&copy; {new Date().getFullYear()} Aulawell Tuition. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
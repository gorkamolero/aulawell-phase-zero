import { CheckCircle, Users, Target, Award } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Aulawell English",
  description: "Meet our expert English tutors and learn about our personalized approach to English education.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4 font-serif">
                Meet Our Team
              </h1>
              <p className="text-xl text-slate-600">
                Passionate educators dedicated to your success
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main About Section with Image */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/amy-tutor.jpg"
                    alt="Amy - Lead English Tutor"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
              
              <FadeIn delay={200}>
                <div>
                  <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
                    Excellence in English Education
                  </h2>
                  <p className="text-lg text-slate-600 mb-4">
                    Welcome to Aulawell English, where we transform the way students learn and master 
                    the English language. Our team of expert tutors brings years of experience and a 
                    genuine passion for education.
                  </p>
                  <p className="text-lg text-slate-600 mb-6">
                    We believe that every student has unique potential waiting to be unlocked. Through 
                    personalized attention, innovative teaching methods, and a supportive learning 
                    environment, we help students not just improve their grades, but develop a lifelong 
                    love for the English language.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                      <span>Native English-speaking tutors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                      <span>Proven track record of success</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-gold flex-shrink-0" />
                      <span>Tailored learning plans for each student</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy mb-12 text-center font-serif">
              What Makes Us Different
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={100}>
              <div className="text-center">
                <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Small Class Sizes</h3>
                <p className="text-slate-600">
                  Maximum 6 students per group ensures everyone gets the attention they deserve
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="text-center">
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Goal-Oriented</h3>
                <p className="text-slate-600">
                  Clear objectives and regular progress tracking to ensure you reach your targets
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Proven Results</h3>
                <p className="text-slate-600">
                  95% of our students achieve or exceed their target grades
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who have transformed their English skills with us
            </p>
            <a 
              href="/contact" 
              className="inline-block text-lg font-medium text-white hover:text-gold underline underline-offset-4 transition-colors"
            >
              Book Your Free Consultation →
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
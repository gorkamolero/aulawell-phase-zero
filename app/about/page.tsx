import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Aulawell Tuition",
  description: "Bespoke tutoring service offering premium tuition to children of all ages and nationalities. Meet our founder Amy Fernandez-Kong and learn about our personalized approach.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy/95 to-navy text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/student-studying.jpg')] opacity-20 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/70 to-navy/90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-serif">
                About Us
              </h1>
              <p className="text-2xl lg:text-3xl font-light leading-relaxed text-white/90">
                Bespoke tutoring service offering premium tuition to children of all ages and nationalities
              </p>
              <div className="mt-8 flex flex-wrap gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>1:1 & Group Tuition</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-gold" />
                  <span>All Ages Welcome</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={200}>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-slate-600 mb-6">
                  Aulawell Tuition is a bespoke tutoring service offering premium tuition to children of all ages and nationalities. Our friendly team and dedicated tutors take the time to get to know your family, ensuring you receive the best solutions tailored to your needs.
                </p>
                <p className="text-lg text-slate-600 mb-6">
                  We offer 1:1 and group tuition to students all over the world, as well as online tuition, recorded courses and resources – all designed to help families support their child to success.
                </p>
                <p className="text-lg text-slate-600 mb-8">
                  Parents approach us throughout the year for a number of different reasons.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reasons Parents Come to Us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={400}>
              <h2 className="text-3xl font-bold text-navy mb-8 font-serif">
                Here are some of the reasons that parents come to us:
              </h2>
            </FadeIn>
            <div className="space-y-4">
              <FadeIn delay={600}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-600">
                    I have just had parents evening and my child isn&apos;t doing as well as I expected
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={700}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-600">
                    My child is aiming for a top grammar school and needs support to get there
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={800}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-600">
                    I know that my child understands the information, but they struggle in exams
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={900}>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                  <p className="text-lg text-slate-600">
                    We are arguing all the time to get them to work!
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Founder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={1000}>
              <h2 className="text-3xl font-bold text-navy mb-12 text-center font-serif">
                About Our Founder
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <FadeIn delay={1200}>
                <div className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/amy-tutor.jpeg"
                    alt="Amy Fernandez-Kong - Founder of Aulawell Tuition"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </FadeIn>
              
              <FadeIn delay={1400}>
                <div className="prose prose-lg">
                  <p className="text-lg text-slate-600 mb-4">
                    Amy Fernandez-Kong brings a unique blend of academic expertise and global perspective to her teaching of both English as an academic subject and as a foreign language. Born in China and grew up in Venezuela and the United Kingdom, Amy&apos;s rich international background informs her inclusive and adaptable teaching style.
                  </p>
                  <p className="text-lg text-slate-600 mb-4">
                    She holds a Bachelor&apos;s degree in English Literature from the University of Manchester and began her teaching journey in Madrid and Lisboa as an English as a Foreign Language teacher. In 2016, she furthered her qualifications by earning a CELTA certification from International House Los Angeles. Amy also obtained her teacher training qualification in Literature in 2013, solidifying her ability to teach both language and literature with depth and confidence.
                  </p>
                  <p className="text-lg text-slate-600 mb-4">
                    With extensive experience in the UK and international education sectors, Amy has managed residential tuition camps in the UK and tutored families across Spain, Portugal, Dubai, Singapore, and Russia. She has supported students in gaining admission to top UK schools such as St Mary&apos;s Ascot, St Paul&apos;s, and Harrow, as well as elite universities including Oxford, Cambridge, Durham, and internationally at institutions like Princeton, the University of Pennsylvania, and Duke.
                  </p>
                  <p className="text-lg text-slate-600">
                    As the Founder of Aulawell Tuition, Amy remains passionate about education and continues to teach in mainstream classrooms. She is also a sought-after speaker at conferences, where she shares insights on guiding parents through the challenges of social media and explores the evolving role of Artificial Intelligence in education.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn delay={1600}>
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Ready to Support Your Child&apos;s Success?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you find the best solutions tailored to your family&apos;s needs
            </p>
            <a 
              href="/contact" 
              className="inline-block text-lg font-medium text-white hover:text-gold underline underline-offset-4 transition-colors"
            >
              Get Started Today →
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
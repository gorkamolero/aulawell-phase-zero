import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Target, Star, CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aulawell English - Expert English Tutoring | Private & Group Classes",
  description: "Professional English tutoring for Academic English (GCSE, A-Level, IB) and Language courses (IELTS, FCE). Private lessons and small group classes available.",
  openGraph: {
    title: "Aulawell English - Expert English Tutoring",
    description: "Transform your English skills with expert tutoring",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy/5 via-white to-gold/5 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)")`}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-navy mb-6 font-serif">
              Expert English Tutoring for Academic Success
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Private Lessons and Group Classes for All Levels
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-navy text-navy hover:bg-navy hover:text-white transition-all">
                <Link href="#services">View Our Courses</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">
              Our English Tutoring Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of English courses designed to help you achieve your goals
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={100}>
              <Card className="hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 bg-white border-navy/10">
                <CardHeader>
                  <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-navy" />
                  </div>
                  <CardTitle className="text-navy">Academic English</CardTitle>
                  <CardDescription>KS3 to IB Preparation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>GCSE & IGCSE English</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>A-Level preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Essay writing & analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Exam board expertise</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-navy hover:bg-navy/90">
                    <Link href="/academic-english">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1 bg-white border-gold/20">
                <CardHeader>
                  <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <BookOpen className="h-8 w-8 text-gold" />
                  </div>
                  <CardTitle className="text-navy">English Language</CardTitle>
                  <CardDescription>General & Exam Preparation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>General English fluency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>FCE & IELTS preparation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Business English</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Speaking & writing skills</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-navy hover:bg-navy/90">
                    <Link href="/english-language">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-navy/5">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">
              Why Choose Aulawell English?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We&apos;re committed to helping every student reach their full potential
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={100}>
              <div className="text-center">
                <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Expert Tutors</h3>
                <p className="text-slate-600">
                  Native English-speaking tutors with proven track records in exam preparation
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="text-center">
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Personalized Learning</h3>
                <p className="text-slate-600">
                  Tailored lessons that adapt to your learning style and goals
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-navy">Proven Results</h3>
                <p className="text-slate-600">
                  High success rates with students achieving their target grades
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Class Options Section */}
      <section className="py-20 bg-gold/5">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">
              Private Lessons / Groups
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the learning format that works best for you
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={100}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-white/80">
                <CardHeader>
                  <CardTitle className="text-navy">Private 1-to-1 Lessons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Fully personalized curriculum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Flexible scheduling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Focused attention on individual needs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Rapid progress and improvement</span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 mb-4">Perfect for students who need intensive support or have specific goals</p>
                  <Button asChild className="w-full bg-gold hover:bg-gold/90 text-white">
                    <Link href="/contact">Book Private Lesson</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-white/80">
                <CardHeader>
                  <CardTitle className="text-navy">Small Group Classes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Maximum 6 students per class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Learn with peers at similar levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Interactive and engaging sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>More affordable option</span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 mb-4">Ideal for students who enjoy collaborative learning</p>
                  <Button asChild className="w-full bg-gold hover:bg-gold/90 text-white">
                    <Link href="/contact">Join a Group Class</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">
              What Our Students Say
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Success stories from students who achieved their goals with us
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={100}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-white/80">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    &quot;My tutor helped me improve from a grade 6 to a grade 9 in GCSE English. 
                    The personalized approach made all the difference!&quot;
                  </p>
                  <div className="font-semibold text-navy">Sarah M.</div>
                  <div className="text-sm text-slate-500">GCSE Student</div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-white/80">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    &quot;I achieved an 8.0 in IELTS thanks to the excellent preparation. 
                    The mock tests and feedback were invaluable.&quot;
                  </p>
                  <div className="font-semibold text-navy">Ahmed K.</div>
                  <div className="text-sm text-slate-500">IELTS Student</div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={300}>
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-white/80">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">
                    &quot;The A-Level English Literature support was outstanding. 
                    I got an A* and secured my place at Oxford!&quot;
                  </p>
                  <div className="font-semibold text-navy">Emma T.</div>
                  <div className="text-sm text-slate-500">A-Level Student</div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-serif">
              Ready to Start Your English Learning Journey?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your goals and create a personalized learning plan
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white border-0 shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
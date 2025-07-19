import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, CheckCircle, BookOpen, Trophy } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Academic English - GCSE, A-Level, IB | Aulawell English",
  description: "Expert Academic English tutoring for KS3, GCSE, IGCSE, A-Level, and IB students. Comprehensive exam preparation with proven results.",
}

export default function AcademicEnglishPage() {
  const levels = [
    {
      name: "KS3",
      description: "Key Stage 3 English",
      details: "Build strong foundations in reading, writing, and analysis",
      href: "/academic-english/ks3"
    },
    {
      name: "GCSE",
      description: "GCSE English Language & Literature",
      details: "Comprehensive exam preparation for grades 9-1",
      href: "/academic-english/gcse"
    },
    {
      name: "IGCSE",
      description: "International GCSE",
      details: "Cambridge and Edexcel IGCSE preparation",
      href: "/academic-english/igcse"
    },
    {
      name: "A-Level",
      description: "A-Level English",
      details: "Advanced literature and language analysis",
      href: "/academic-english/a-level"
    },
    {
      name: "IB",
      description: "International Baccalaureate",
      details: "IB Language & Literature support",
      href: "/academic-english/ib"
    }
  ]

  const examBoards = ["Cambridge", "Pearson Edexcel", "AQA", "OCR"]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <GraduationCap className="h-16 w-16 text-navy mx-auto mb-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4 font-serif">
              Academic English
            </h1>
            <p className="text-xl text-slate-600">
              Expert tutoring for KS3, GCSE, IGCSE, A-Level, and IB students
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6 text-center font-serif">
              Comprehensive Academic Support
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              Our Academic English program is designed to help students excel in their exams 
              and develop strong analytical and writing skills that will serve them throughout 
              their academic journey.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <FadeIn delay={100}>
                <div className="text-center">
                  <BookOpen className="h-12 w-12 text-navy mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Essay Writing</h3>
                  <p className="text-sm text-slate-600">
                    Master essay structure, argumentation, and critical analysis
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="text-center">
                  <Trophy className="h-12 w-12 text-gold mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Exam Technique</h3>
                  <p className="text-sm text-slate-600">
                    Learn proven strategies for time management and mark maximization
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={300}>
                <div className="text-center">
                  <GraduationCap className="h-12 w-12 text-navy mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Literature Analysis</h3>
                  <p className="text-sm text-slate-600">
                    Develop deep understanding of texts and literary techniques
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-serif">
              Choose Your Level
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {levels.map((level, index) => (
              <FadeIn key={level.name} delay={(index + 1) * 100}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardHeader>
                    <CardTitle className="text-navy">{level.name}</CardTitle>
                    <CardDescription>{level.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-4">{level.details}</p>
                    <Button asChild className="w-full bg-navy hover:bg-navy/90">
                      <Link href={level.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Boards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
              All Major Exam Boards Covered
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our tutors are experienced with all major UK and international exam boards
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {examBoards.map((board, index) => (
                <FadeIn key={board} delay={(index + 1) * 100}>
                  <div className="bg-slate-100 px-6 py-3 rounded-full text-slate-700 font-medium hover:bg-slate-200 transition-colors">
                    {board}
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center font-serif">
              What We Cover
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-navy">English Language</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Creative and descriptive writing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Language analysis and evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Non-fiction text analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Persuasive and argumentative writing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-navy">English Literature</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Shakespeare analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Poetry comparison and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Novel and play studies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>Context and critical interpretation</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Ready to Excel in Academic English?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a free consultation to discuss your academic goals and create a personalized study plan
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-white border-0 shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">Book Your Free Consultation</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
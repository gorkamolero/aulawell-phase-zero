import { CheckCircle, Users, Target, Award } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Aulawell English",
  description: "Learn about our mission to provide exceptional English tutoring with personalized learning plans and proven results.",
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
                About Aulawell English
              </h1>
              <p className="text-xl text-slate-600">
                Dedicated to helping students achieve excellence in English
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FadeIn>
                <h2 className="text-3xl font-bold text-navy mb-6 font-serif">
                  Our Mission
                </h2>
                <p className="text-lg text-slate-600 mb-4">
                  At Aulawell English, we believe that every student has the potential to excel 
                  in English. Our mission is to provide personalized, high-quality tutoring that 
                  not only helps students achieve their academic goals but also builds lasting 
                  confidence in their English abilities.
                </p>
                <p className="text-lg text-slate-600">
                  Whether preparing for crucial exams or improving language fluency, we tailor 
                  our approach to meet each student&apos;s unique needs and learning style.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="bg-slate-100 rounded-lg p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-gold" />
                      <span className="font-semibold">Expert Tutors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-gold" />
                      <span className="font-semibold">Proven Methods</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-gold" />
                      <span className="font-semibold">Flexible Learning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-gold" />
                      <span className="font-semibold">Outstanding Results</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-navy mb-12 text-center font-serif">
              Our Core Values
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeIn delay={100}>
              <div className="text-center">
                <div className="bg-navy/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Student-Centered</h3>
                <p className="text-slate-600">
                  Every lesson is designed around the individual student&apos;s needs, goals, 
                  and learning preferences
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="text-center">
                <div className="bg-gold/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Results-Driven</h3>
                <p className="text-slate-600">
                  We focus on measurable outcomes and continuous improvement to ensure 
                  students reach their targets
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">Excellence</h3>
                <p className="text-slate-600">
                  We maintain the highest standards in teaching quality and educational 
                  materials
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl font-bold text-navy mb-8 text-center font-serif">
                Our Teaching Approach
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="prose prose-lg max-w-none text-slate-600">
                <p className="mb-6">
                  Our teaching methodology combines traditional excellence with modern innovation. 
                  We understand that each student learns differently, which is why we offer both 
                  one-to-one tutoring and small group classes.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      Personalized Learning Plans
                    </h3>
                    <p>
                      Every student begins with a comprehensive assessment. We identify strengths, 
                      areas for improvement, and create a tailored learning journey that adapts 
                      as the student progresses.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      Interactive Teaching Methods
                    </h3>
                    <p>
                      Our lessons are engaging and interactive, incorporating a variety of resources 
                      and activities to keep students motivated and ensure deep understanding of 
                      the material.
                    </p>
                  </div>
                </div>
                <p>
                  With regular progress tracking and feedback, parents and students always know 
                  exactly where they stand and what steps to take next. Our ultimate goal is not 
                  just exam success, but developing a genuine love and confidence in English that 
                  lasts a lifetime.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12 font-serif">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-5xl font-bold mb-2 text-gold">95%</div>
                  <p className="text-xl">Student Success Rate</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2 text-gold">500+</div>
                  <p className="text-xl">Students Helped</p>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2 text-gold">4.9/5</div>
                  <p className="text-xl">Average Rating</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
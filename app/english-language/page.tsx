import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, MessageCircle, Target, Globe, CheckCircle } from "lucide-react"

export default function EnglishLanguagePage() {
  const courses = [
    {
      name: "General English",
      icon: MessageCircle,
      description: "Improve your everyday English communication",
      features: [
        "Conversational fluency",
        "Grammar and vocabulary",
        "Pronunciation practice",
        "Real-world scenarios"
      ],
      href: "/english-language/general"
    },
    {
      name: "FCE Preparation",
      icon: Target,
      description: "First Certificate in English (B2 level)",
      features: [
        "Complete exam preparation",
        "Practice tests",
        "Speaking practice",
        "Writing feedback"
      ],
      href: "/english-language/fce"
    },
    {
      name: "Advanced English",
      icon: BookOpen,
      description: "C1-C2 level proficiency courses",
      features: [
        "Advanced grammar",
        "Academic writing",
        "Professional English",
        "Cultural fluency"
      ],
      href: "/english-language/advanced"
    },
    {
      name: "IELTS Preparation",
      icon: Globe,
      description: "International English Language Testing System",
      features: [
        "All four skills covered",
        "Mock examinations",
        "Band score improvement",
        "University applications"
      ],
      href: "/english-language/ielts"
    }
  ]

  const skills = [
    {
      name: "Speaking",
      description: "Build confidence in conversation and public speaking"
    },
    {
      name: "Writing",
      description: "Master formal and informal writing styles"
    },
    {
      name: "Reading",
      description: "Improve comprehension and speed reading skills"
    },
    {
      name: "Listening",
      description: "Understand native speakers and various accents"
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              English Language Courses
            </h1>
            <p className="text-xl text-slate-600">
              From general fluency to exam preparation, achieve your English language goals
            </p>
          </div>
        </div>
      </section>

      {/* Skills Development */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Comprehensive Language Skills Development
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              Our courses focus on developing all four essential language skills to ensure 
              well-rounded proficiency and confidence in any situation.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-slate-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Options */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Choose Your Course
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course) => {
              const Icon = course.icon
              return (
                <Card key={course.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Icon className="h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={course.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business English Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Business English
                </h3>
                <p className="text-lg text-slate-700 mb-6">
                  Specialized courses for professionals looking to advance their careers
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Email and report writing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Presentation skills</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Meeting participation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                      <span>Negotiation language</span>
                    </li>
                  </ul>
                </div>
                <Button asChild>
                  <Link href="/contact">Inquire About Business English</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Our Teaching Approach
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p className="text-sm text-slate-600">
                  We start with a comprehensive level assessment to understand your current abilities
                </p>
              </div>
              <div>
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Personalized Plan</h3>
                <p className="text-sm text-slate-600">
                  Create a customized learning plan tailored to your goals and timeline
                </p>
              </div>
              <div>
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Regular Progress</h3>
                <p className="text-sm text-slate-600">
                  Track your improvement with regular assessments and feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Your English Language Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need general fluency or exam preparation, we have the perfect course for you
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Your Free Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
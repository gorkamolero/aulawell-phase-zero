'use client'

import { useState } from 'react'
import { CheckSquare, ChevronDown, Users, Globe, School, BookOpen, PenTool, Target, Award, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import { FadeIn } from '@/components/ui/fade-in'
import type { Metadata } from 'next'

const metadata: Metadata = {
  title: 'English Language & Academic English Services | Aulawell Tuition',
  description: 'Expert English language tutoring and academic English support for international students. GCSE, A-Level, IB preparation with specialized EFL programs.',
}

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "How Much Do Tuition Lessons Cost?",
    answer: "We have a range of fees depending on the service and level chosen. Please Contact us for your custom offer."
  },
  {
    question: "Can I have a mix of face-to-face and online?",
    answer: "As part of our flexibility and premium packaging, you can adjust for changes in circumstances (trips, illness etc) and have an online session to substitute for in-person or vice-versa. There will be a slight mark-up if you opt for a one-off or several sessions of in-person. This service is only currently available for families and students based in Madrid, Spain."
  },
  {
    question: "Does my child need to be adept at technology online?",
    answer: "We currently use Zoom for all online lessons, so a standard knowledge of Zoom functions would be sufficient. Occasionally, we would also use interactive apps and quizzes and they would simply need access to Google Email address to be able to sign-up and enter."
  },
  {
    question: "Do I need to provide or purchase any learning materials?",
    answer: "No. We provide all the necessary lessons, exercise books and other learning materials."
  },
  {
    question: "Do You Cater For Students With Learning Difficulties Such As Dyslexia?",
    answer: "Yes. We assess each student separately and provide tailored strategies to support their learning needs."
  },
  {
    question: "Do You Give Students Homework?",
    answer: "Not generally. However, if you request homework, we will gladly provide assignments."
  }
]

function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">
              Everything you need to know about our English tutoring services
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-navy pr-4">{item.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gold transition-transform duration-300 flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(index) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy text-white min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E)"}`}}></div>
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-6">
                <span className="w-12 h-px bg-gold"></span>
                Excellence in Education
                <span className="w-12 h-px bg-gold"></span>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
                English Language & Academic Excellence
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-4">
                Comprehensive English support from conversational fluency to academic mastery
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Expert tutoring for international students pursuing British & American curricula, delivered by experienced educators with examiner insight
              </p>
            </FadeIn>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gold hover:bg-gold/90 text-navy px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Book Free Consultation
              </a>
              <a href="#academic-subjects" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Subjects Section */}
      <section className="py-16" id="academic-subjects">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">Academic Subject Tutoring</h2>
              <p className="text-xl text-slate-600">
                Master British & American curricula with examiner-level insight
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-3">Key Stage 3</h3>
                <p className="text-sm text-gold font-semibold mb-3">Ages 11-14</p>
                <p className="mb-4 text-gray-700">
                  Build strong foundations during these crucial transition years. I help students 
                  develop essential skills while adapting to new educational systems.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Subjects:</strong> English Language & Literature</p>
                  <p><strong>Focus:</strong> Study skills, curriculum adaptation, confidence building</p>
                  <p className="text-gold font-semibold">Outcome: Smooth transition and preparation for GCSE success</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-3">GCSE & IGCSE</h3>
                <p className="text-sm text-gold font-semibold mb-3">Ages 14-16</p>
                <p className="mb-4 text-gray-700">
                  Navigate the complexities of British examinations with an actual examiner as your guide.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Speciality:</strong> English Language & Literature (AQA, Cambridge, Edexcel)</p>
                  <p><strong>Examiner Advantage:</strong> I mark these exams—I know exactly what earns top marks</p>
                  <p className="text-gold font-semibold">Outcome: Consistent 7-9 grades (A/A*) for my students</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-3">A-Level</h3>
                <p className="text-sm text-gold font-semibold mb-3">Ages 16-18</p>
                <p className="mb-4 text-gray-700">
                  Achieve the grades needed for top university admission with examiner-level insight.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Speciality:</strong> English Literature, Language, and Language & Literature</p>
                  <p><strong>Support Includes:</strong> Essay mastery, unseen text analysis, coursework guidance</p>
                  <p className="text-gold font-semibold">Outcome: Students regularly achieve A/A* and Oxbridge offers</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-3">International Baccalaureate</h3>
                <p className="text-sm text-gold font-semibold mb-3">IB Diploma</p>
                <p className="mb-4 text-gray-700">
                  Master the unique demands of IB English with specialized support.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Coverage:</strong> English A Literature, English B, Extended Essay support</p>
                  <p><strong>Levels:</strong> Both Standard and Higher Level</p>
                  <p className="text-gold font-semibold">Outcome: Average improvement from 5 to 7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* English Language Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50" id="english-language">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">English as a Foreign Language</h2>
              <p className="text-xl text-slate-600">
                From first words to fluent conversations - building confidence at every level
              </p>
            </FadeIn>
            
            {/* Top section with image on left beside the two main categories */}
            <FadeIn delay={200}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-12">
                <div>
                  <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/aulawell-empty-section.png"
                      alt="English language learning"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <School className="text-gold w-8 h-8" />
                      <h3 className="text-xl font-bold text-navy">Children & Teenagers</h3>
                    </div>
                    <p className="mb-4 text-gray-700">
                      Engaging, age-appropriate lessons that build confidence alongside competence.
                    </p>
                    <ul className="space-y-2 flex-grow">
                      {[
                        'Interactive games and activities',
                        'School curriculum support',
                        'Social English for making friends',
                        'Cambridge Young Learners prep'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckSquare className="text-gold w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="text-gold w-8 h-8" />
                      <h3 className="text-xl font-bold text-navy">Adults</h3>
                    </div>
                    <p className="mb-4 text-gray-700">
                      Professional development and life skills through practical English.
                    </p>
                    <ul className="space-y-2 flex-grow">
                      {[
                        'Business English for professionals',
                        'Everyday conversation skills',
                        'Job interview preparation',
                        'Cambridge FCE/CAE/CPE prep'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckSquare className="text-gold w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Bottom section with "All EFL programs include" */}
            <FadeIn delay={400}>
              <div className="max-w-3xl mx-auto">
                <div className="p-6 bg-slate-100 rounded-xl">
                <p className="font-semibold text-navy mb-3">All EFL programs include:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Customized learning plans',
                    'Regular progress assessments',
                    'Cultural context integration',
                    'Flexible scheduling for families'
                  ].map((item, index) => (
                    <p key={index} className="flex items-center gap-2">
                      <CheckSquare className="text-gold w-5 h-5" />
                      <span className="text-gray-700">{item}</span>
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Academic English Section */}
      <section className="py-20 bg-white" id="academic-english">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">Academic English</h2>
              <p className="text-xl text-slate-600 mb-6">
                Bridge the gap between conversational fluency and academic excellence
              </p>
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Many international students speak English well but struggle with academic requirements. 
                This specialized program addresses that exact challenge with examiner-level insight.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">What We Master Together:</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <PenTool className="text-gold w-6 h-6" />,
                      title: 'Essay Writing Mastery',
                      description: 'Structure, argumentation, and style for British/American academic standards'
                    },
                    {
                      icon: <BookOpen className="text-gold w-6 h-6" />,
                      title: 'Subject-Specific Vocabulary',
                      description: 'Master the precise academic language of your curriculum subjects'
                    },
                    {
                      icon: <Target className="text-gold w-6 h-6" />,
                      title: 'Critical Analysis Skills',
                      description: 'Develop the analytical thinking and evaluation skills examiners reward'
                    },
                    {
                      icon: <Award className="text-gold w-6 h-6" />,
                      title: 'Exam Technique Mastery',
                      description: 'Understand mark schemes and examiner expectations from the inside'
                    },
                    {
                      icon: <MessageSquare className="text-gold w-6 h-6" />,
                      title: 'Research & Citation Skills',
                      description: 'Properly source information and avoid plagiarism in academic work'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        {item.icon}
                        <div>
                          <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Perfect For:</h3>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <ul className="space-y-4">
                    {[
                      'International students transitioning to English-medium education',
                      'Students preparing for GCSE/A-Level English examinations', 
                      'Anyone struggling with academic writing despite good spoken English',
                      'IB students needing extended essay and coursework support',
                      'University preparation and personal statement writing',
                      'Students wanting to move from conversational to analytical English'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckSquare className="text-gold w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 p-6 bg-navy text-white rounded-xl shadow-lg">
                  <h4 className="font-bold mb-3">Examiner Advantage</h4>
                  <p className="text-gray-100">
                    As a current AQA and Cambridge examiner, I provide insider knowledge of exactly 
                    what gets top marks. My students regularly achieve grades 7-9 at GCSE and A/A* at A-Level 
                    because they know the secrets of academic success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Options */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 font-serif">
                Flexible Learning That Fits Your Life
              </h2>
              <p className="text-xl text-slate-600">
                Choose the format that works best for your family
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="text-gold w-8 h-8" />
                  <h3 className="text-2xl font-bold text-navy">Online Tutoring</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  World-class tutoring from anywhere, with interactive tools and personalized attention.
                </p>
                <ul className="space-y-3">
                  {[
                    'Live, interactive sessions via Zoom',
                    'Screen sharing for collaborative work',
                    'Digital resources and homework tracking',
                    'Session recordings for review',
                    'Flexible scheduling across time zones',
                    'Same quality as in-person lessons'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckSquare className="text-gold w-4 h-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="text-gold w-8 h-8" />
                  <h3 className="text-2xl font-bold text-navy">In-Person (Madrid)</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Premium face-to-face tutoring in the comfort of your home in Madrid.
                </p>
                <ul className="space-y-3">
                  {[
                    'Face-to-face sessions in your home',
                    'Central Madrid and surrounding areas',
                    'Enhanced engagement and focus',
                    'Small group options for neighbors',
                    'Printed materials included',
                    'Premium service experience'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckSquare className="text-gold w-4 h-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 font-serif">
              Ready to Transform Your English Skills?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Whether you&apos;re starting your English journey or perfecting academic skills, 
              we&apos;re here to guide you to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gold hover:bg-gold/90 text-navy px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
              </a>
              <a 
                href="/about" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
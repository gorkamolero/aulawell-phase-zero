"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, GraduationCap, BookOpen } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const academicEnglishItems = [
  { title: "KS3", description: "Key Stage 3 English support" },
  { title: "GCSE", description: "GCSE English preparation" },
  { title: "IGCSE", description: "International GCSE English" },
  { title: "A-Level", description: "A-Level English courses" },
  { title: "IB", description: "International Baccalaureate English" },
]

const englishLanguageItems = [
  { title: "General English", description: "Improve your everyday English" },
  { title: "FCE", description: "First Certificate preparation" },
  { title: "Advanced", description: "Advanced English courses" },
  { title: "IELTS", description: "IELTS exam preparation" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-28 md:h-32 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <Image
              src="/aulawell-logo.png"
              alt="Aulawell English"
              width={400}
              height={100}
              className="h-24 md:h-28 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-navy hover:text-gold transition-colors">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-navy hover:text-gold transition-colors">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-navy hover:text-gold data-[state=open]:text-gold bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">Academic English</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-navy/10 to-navy/20 p-6 no-underline outline-none focus:shadow-md">
                            <GraduationCap className="h-6 w-6 text-navy" />
                            <div className="mb-2 mt-4 text-lg font-medium text-navy">
                              Academic Excellence
                            </div>
                            <p className="text-sm leading-tight text-navy/80">
                              Expert tutoring for UK curriculum and international qualifications
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      {academicEnglishItems.map((item) => (
                        <ListItem key={item.title} title={item.title}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-navy hover:text-gold data-[state=open]:text-gold bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">English Language</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gold/10 to-gold/20 p-6 no-underline outline-none focus:shadow-md">
                            <BookOpen className="h-6 w-6 text-gold" />
                            <div className="mb-2 mt-4 text-lg font-medium text-navy">
                              Language Mastery
                            </div>
                            <p className="text-sm leading-tight text-navy/80">
                              From everyday English to professional certifications
                            </p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      {englishLanguageItems.map((item) => (
                        <ListItem key={item.title} title={item.title}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className="inline-flex h-9 w-max items-center justify-center px-4 py-2 text-sm font-medium text-navy hover:text-gold transition-colors">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-slate-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              
              <div className="space-y-2">
                <p className="text-lg font-medium">Academic English</p>
                <div className="ml-4 space-y-2">
                  {academicEnglishItems.map((item) => (
                    <div
                      key={item.title}
                      className="block text-sm text-gray-600 py-1"
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-medium">English Language</p>
                <div className="ml-4 space-y-2">
                  {englishLanguageItems.map((item) => (
                    <div
                      key={item.title}
                      className="block text-sm text-gray-600 py-1"
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <div
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-default",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
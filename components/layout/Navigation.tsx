"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

const academicEnglishItems = [
  { title: "KS3", href: "/academic-english/ks3", description: "Key Stage 3 English support" },
  { title: "GCSE", href: "/academic-english/gcse", description: "GCSE English preparation" },
  { title: "IGCSE", href: "/academic-english/igcse", description: "International GCSE English" },
  { title: "A-Level", href: "/academic-english/a-level", description: "A-Level English courses" },
  { title: "IB", href: "/academic-english/ib", description: "International Baccalaureate English" },
]

const englishLanguageItems = [
  { title: "General English", href: "/english-language/general", description: "Improve your everyday English" },
  { title: "FCE", href: "/english-language/fce", description: "First Certificate preparation" },
  { title: "Advanced", href: "/english-language/advanced", description: "Advanced English courses" },
  { title: "IELTS", href: "/english-language/ielts", description: "IELTS exam preparation" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
            <Image
              src="/aulawell-logo.png"
              alt="Aulawell English"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className={navigationMenuTriggerStyle()}>
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Academic English</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {academicEnglishItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>English Language</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {englishLanguageItems.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/contact" className={navigationMenuTriggerStyle()}>
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
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block text-sm text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-medium">English Language</p>
                <div className="ml-4 space-y-2">
                  {englishLanguageItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block text-sm text-gray-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
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
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
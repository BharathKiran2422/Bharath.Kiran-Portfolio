"use client"

import * as React from "react"
import Link from "next/link"
import { Mountain } from "lucide-react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { StaggeredMenu } from "./StaggeredMenu"
import { useIsMobile } from "@/hooks/use-mobile"
import { SiCodechef, SiHackerrank, SiLeetcode } from "react-icons/si"
import { Github, Linkedin, Send } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
]

const socialItems = [
  { label: 'GitHub', link: "https://github.com/BharathKiran2422" },
  { label: 'LinkedIn', link: "https://www.linkedin.com/in/bharath-kiran-obilisetty-289b1022b" },
  { label: 'HackerRank', link: "https://www.hackerrank.com/profile/bharathkiran2422" },
  { label: 'LeetCode', link: "https://leetcode.com/BharathKiran2422/" },
  { label: 'CodeChef', link: "https://www.codechef.com/users/bharath_kiran" },
  { label: 'Email', link: "mailto:bharathkiranobilisetty@gmail.com" },
]


export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const NavLinksComponent = () => (
    <nav className={cn("hidden md:flex items-center gap-1")}>
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative px-3 py-2 text-base font-medium transition-colors hover:text-primary",
            pathname === link.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {link.label}
          {pathname === link.href && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-primary rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  )

  if (isMobile) {
    return (
      <div style={{ background: '#1a1a1a' }}>
         <StaggeredMenu
            position="right"
            items={navLinks}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#8A2BE2', '#4B0082', '#483D8B', '#6A5ACD']}
            accentColor="hsl(var(--primary))"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
          />
      </div>
    );
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        isScrolled ? "border-b border-white/10 bg-background/50 backdrop-blur-lg" : ""
      )}
    >
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold">
          <Mountain className="h-7 w-7 text-primary" />
          <span className="text-2xl">BK</span>
        </Link>

        <NavLinksComponent />
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

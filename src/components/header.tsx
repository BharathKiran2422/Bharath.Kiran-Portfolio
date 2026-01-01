
"use client"

import * as React from "react"
import { StaggeredMenu } from "./StaggeredMenu"
import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home", ariaLabel: "Home" },
  { href: "/portfolio", label: "Portfolio", ariaLabel: "Portfolio" },
  { href: "/resume", label: "Resume", ariaLabel: "Resume" },
  { href: "/about", label: "About", ariaLabel: "About" },
  { href: "/blog", label: "Blog", ariaLabel: "Blog" },
  { href: "/gallery", label: "Gallery", ariaLabel: "Gallery" },
  { href: "/contact", label: "Contact", ariaLabel: "Contact" },
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
  const menuItems = navLinks.map(navLink => ({
      ...navLink,
      linkComponent: (
        <Link href={navLink.href} className="sm-panel-item" aria-label={navLink.ariaLabel}>
            <span className="sm-panel-itemLabel">{navLink.label}</span>
        </Link>
      )
  }));
    
  return (
      <div style={{ background: 'transparent', position: 'relative', zIndex: 1000 }}>
         <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={['hsl(var(--background))', 'hsl(var(--background))', 'hsl(var(--background))', 'hsl(var(--background))']}
            accentColor="hsl(var(--primary))"
            logoUrl="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='hsl(var(--primary))' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='m8 3 4 8 5-5 5 15H2L8 3z'/%3e%3c/svg%3e"
          />
      </div>
  );
}

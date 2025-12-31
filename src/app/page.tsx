'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Send, Code, Rocket, Layers, GitBranch, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SiCodepen, SiDevdotto } from 'react-icons/si';

const roles = ["Full-Stack Developer", "AI Enthusiast"];
const stats = [
    { value: "300+", label: "LeetCode Solved", icon: <Code className="h-8 w-8 text-primary" /> },
    { value: "5+", label: "Projects Completed", icon: <Rocket className="h-8 w-8 text-primary" /> },
    { value: "8+", label: "Technologies Mastered", icon: <Layers className="h-8 w-8 text-primary" /> },
    { value: "240+", label: "GitHub Contributions", icon: <GitBranch className="h-8 w-8 text-primary" /> },
];

const AnimatedOrbs = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-[spin_20s_linear_infinite]" />
    <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-[spin_25s_linear_infinite_reverse]" />
    <div className="absolute -bottom-20 -left-60 h-60 w-60 rounded-full bg-violet-500/10 blur-3xl animate-[spin_15s_linear_infinite]" />
  </div>
);

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      const updatedText = isDeleting
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 75 : 150);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <main className="relative flex-grow">
      <AnimatedOrbs />
      <section id="home" className="container mx-auto min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h2 className="text-xl font-medium text-muted-foreground">Hi, I'm Bharath Kiran</h2>
          <h1 className="mt-2 font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Building Digital Experiences That Matter
          </h1>
          <p className="mt-4 text-xl font-medium text-primary min-h-[28px]">
            {text}<span className="animate-ping">|</span>
          </p>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I transform complex problems into elegant solutions through clean code and thoughtful design. Specializing in React, Node.js, and modern web technologies with a growing passion for AI and data science.
          </p>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-4">
            <Button size="lg" asChild className="button-gradient-primary shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              <Link href="/portfolio">View My Work</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
               <Link href="/Bharath_Kiran_Resume.pdf" download="Bharath_Kiran_Resume.pdf">Download Resume</Link>
            </Button>
          </div>
           <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
              <a href="https://github.com/BharathKiran2422" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/in/bharath-kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="CodePen">
                <SiCodepen className="h-7 w-7" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Dev.to">
                <SiDevdotto className="h-7 w-7" />
              </a>
              <a href="mailto:bharathkiranobilisetty@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Send className="h-7 w-7" />
              </a>
            </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative h-80 w-80 sm:h-96 sm:w-96 group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-accent opacity-50 blur-xl group-hover:opacity-75 transition-all duration-500 animate-[spin_4s_linear_infinite]" />
            <Image
                src="/profile.pic.png"
                alt="Bharath's Profile Picture"
                width={400}
                height={400}
                priority
                data-ai-hint="portrait man"
                className="relative h-full w-full rounded-full object-cover shadow-2xl"
            />
          </div>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-24">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300"
            >
              {stat.icon}
              <p className="font-headline text-4xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-center text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ArrowDown className="h-6 w-6 text-white/50 animate-bounce" />
      </div>
    </main>
  );
}

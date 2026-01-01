
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Briefcase, Code, Cpu, GraduationCap, Lightbulb, Puzzle, ShieldCheck, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const timelineEvents = [
  {
    icon: <GraduationCap />,
    date: '2021',
    title: 'Started Coding Journey',
    description: 'Began my computer science education, diving into foundational programming concepts and web development basics.',
  },
  {
    icon: <Briefcase />,
    date: '2023',
    title: 'Internship at Indian Servers',
    description: 'Gained practical experience in application security testing and web development in a professional environment.',
  },
  {
    icon: <Code />,
    date: '2024',
    title: 'Full-Stack at DataValley',
    description: 'Developed and maintained end-to-end web applications, honing my skills in both frontend and backend technologies.',
  },
  {
    icon: <Cpu />,
    date: '2024 - Present',
    title: 'Exploring AI/ML',
    description: 'Currently deepening my knowledge in Artificial Intelligence and Machine Learning to build smarter applications.',
  },
];

const competencies = [
    {
        icon: <Code className="h-10 w-10 text-primary" />,
        title: "Full-Stack Development",
        description: "Building end-to-end web applications with modern frameworks and scalable architectures. From responsive frontends to robust backend systems."
    },
    {
        icon: <Puzzle className="h-10 w-10 text-primary" />,
        title: "Problem Solving",
        description: "Strong foundation in data structures and algorithms with 300+ problems solved. I approach challenges systematically and create optimized solutions."
    },
    {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Security Focused",
        description: "Experience in application security testing, vulnerability assessment, and implementing secure coding practices in real-world applications."
    },
    {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "AI & Data Science",
        description: "Exploring machine learning fundamentals, data analysis with Python, and building intelligent features into applications."
    }
];

const principles = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "User-First Design",
        description: "Every line of code serves a purpose for the end user, focusing on intuitive and accessible experiences."
    },
    {
        icon: <Code className="h-8 w-8 text-primary" />,
        title: "Clean & Maintainable",
        description: "Writing code that's not just functional, but also easy to understand, scale, and maintain for future development."
    },
    {
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        title: "Continuous Learning",
        description: "Passionately staying current with emerging technologies and best practices to deliver modern solutions."
    }
];


const AboutPage = () => {
    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

  return (
    <div className="flex-grow">
      <motion.main 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 py-16 md:py-24"
      >
        {/* Section 1: Introduction */}
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div 
            variants={itemVariants}
            className="md:col-span-3"
          >
            <p className="font-headline text-lg font-medium text-primary">About Me</p>
            <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Crafting Solutions at the Intersection of Code & Creativity
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              I'm a Computer Science student and full-stack developer with a passion for building impactful digital experiences. My journey in tech is driven by curiosity and a commitment to continuous learning. Through internships and hands-on projects, I've developed expertise in web development, application security, and data science while maintaining a focus on user-centric design and clean code.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2"
          >
             <div className="relative">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-purple-600 to-violet-500 opacity-20 blur-xl"></div>
              <ul className="relative rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm space-y-8 cursor-target">
                {timelineEvents.map((event, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {event.icon}
                    </div>
                    <div>
                      <p className="font-bold text-primary">{event.date}</p>
                      <h3 className="font-semibold text-white">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Core Competencies */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="my-24"
        >
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Core Competencies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {competencies.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 cursor-target"
              >
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold font-headline text-white">{skill.title}</h3>
                  <p className="mt-2 text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Values & Approach */}
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="my-24"
        >
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">How I Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm cursor-target"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    {principle.icon}
                </div>
                <h3 className="text-xl font-bold font-headline text-white">{principle.title}</h3>
                <p className="mt-2 text-muted-foreground italic">"{principle.description}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 4: CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="font-headline text-2xl font-semibold">{"Let's Connect"}</h3>
          <p className="mt-2 text-muted-foreground">
            Have a project in mind or want to discuss technology? I'd love to hear from you.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild className="button-gradient-primary shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-target">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default AboutPage;

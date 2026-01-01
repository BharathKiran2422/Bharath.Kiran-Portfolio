
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Briefcase, Building, Calendar, CheckCircle, Code, Download, GraduationCap, Mail, MapPin, Monitor, Puzzle, School, ShieldCheck, Star, User, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SiPython, SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiGit, SiGithub, SiPostman } from 'react-icons/si';
import { FaJava } from "react-icons/fa";

const experience = [
  {
    date: 'Dec 2024 - Apr 2025',
    logo: '/skilldzire-logo.png',
    position: 'Data Science Intern',
    company: 'SkillDzire',
    description: 'Developed foundational skills in Python, data structures, and machine learning. Applied statistical analysis and NumPy/Pandas for real-world datasets. Completed hands-on projects in data preprocessing and exploratory data analysis.',
    tech: ['Python', 'Pandas', 'NumPy', 'ML Basics', 'Data Analysis'],
  },
  {
    date: 'Jun 2024 - Aug 2024',
    logo: '/datavalley-logo.png',
    position: 'Full-Stack Development Intern',
    company: 'DataValley',
    description: 'Designed and developed responsive web applications using HTML, CSS, and modern frameworks. Built backend services with optimized SQL database operations. Implemented RESTful APIs and participated in agile development cycles.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL', 'REST APIs', 'Git'],
  },
  {
    date: 'May 2023 - Jul 2023',
    logo: '/indianservers-logo.png',
    position: 'Application Security & Pentesting Intern',
    company: 'Indian Servers',
    description: 'Conducted comprehensive security assessments on web applications including OWASP Top 10 vulnerabilities. Performed penetration testing and worked with NLP for text processing. Fine-tuned BERT models using OpenAI APIs for enhanced text analysis.',
    tech: ['Security Testing', 'OWASP', 'Python', 'NLP', 'BERT', 'OpenAI APIs'],
  },
];

const education = {
  degree: 'Bachelor of Technology in Computer Science',
  institution: 'SRM University AP',
  logo: '/srm-logo.png',
  duration: '2021 - 2025',
  gpa: '8.5/10',
  courses: ['Data Structures', 'Algorithms', 'Database Management', 'Web Technologies', 'Machine Learning'],
  achievement: "Dean's List 2023",
};

const techSkills = [
  { name: 'Python', proficiency: 90, icon: <SiPython className="h-6 w-6 text-blue-400" /> },
  { name: 'JavaScript', proficiency: 85, icon: <SiJavascript className="h-6 w-6 text-yellow-400" /> },
  { name: 'Java', proficiency: 75, icon: <FaJava className="h-6 w-6 text-red-400" /> },
  { name: 'React', proficiency: 85, icon: <SiReact className="h-6 w-6 text-blue-500" /> },
  { name: 'HTML5', proficiency: 95, icon: <SiHtml5 className="h-6 w-6 text-orange-500" /> },
  { name: 'CSS3', proficiency: 90, icon: <SiCss3 className="h-6 w-6 text-blue-500" /> },
  { name: 'Tailwind CSS', proficiency: 80, icon: <SiTailwindcss className="h-6 w-6 text-teal-400" /> },
  { name: 'Node.js', proficiency: 80, icon: <SiNodedotjs className="h-6 w-6 text-green-500" /> },
  { name: 'Express.js', proficiency: 75, icon: <SiExpress className="h-6 w-6 text-gray-400" /> },
  { name: 'MySQL', proficiency: 85, icon: <SiMysql className="h-6 w-6 text-blue-600" /> },
  { name: 'PostgreSQL', proficiency: 70, icon: <SiPostgresql className="h-6 w-6 text-blue-400" /> },
  { name: 'Firebase', proficiency: 75, icon: <SiFirebase className="h-6 w-6 text-yellow-500" /> },
  { name: 'Git', proficiency: 90, icon: <SiGit className="h-6 w-6 text-red-500" /> },
  { name: 'GitHub', proficiency: 90, icon: <SiGithub className="h-6 w-6" /> },
  { name: 'Postman', proficiency: 85, icon: <SiPostman className="h-6 w-6 text-orange-500" /> },
];

const softSkills = [
  { name: 'Problem Solving', description: 'Breaking down complex issues into manageable solutions.' },
  { name: 'Communication', description: 'Articulating ideas clearly to technical and non-technical audiences.' },
  { name: 'Quick Learning', description: 'Rapidly adapting to new technologies and concepts.' },
  { name: 'Analytical Thinking', description: 'Leveraging data to drive decisions and strategies.' },
  { name: 'Team Collaboration', description: 'Working effectively in agile team environments.' },
  { name: 'Time Management', description: 'Prioritizing tasks to meet deadlines efficiently.' },
];

const certifications = [
    { name: 'Google UX Design', issuer: 'Google', year: '2024', link: '#' },
    { name: 'Google Data Analytics', issuer: 'Google', year: '2024', link: '#' },
    { name: 'Artificial Intelligence', issuer: 'Infosys', year: '2024', link: '#' },
    { name: 'Python Essentials', issuer: 'Cisco', year: '2023', link: '#' },
    { name: 'Cyber Security Fundamentals', issuer: 'Cisco', year: '2023', link: '#' },
];

const resumeProfile = {
  summary: "I'm a results-driven Computer Science student specializing in full-stack development with growing expertise in data science and AI. My diverse internship experiences have equipped me with practical skills in web development, application security, and machine learning. I thrive in collaborative environments and am passionate about creating user-centric, high-quality digital solutions. As a quick learner and creative problem-solver, I'm eager to tackle new challenges and contribute to innovative projects.",
  highlights: [
    { icon: <Zap className="h-5 w-5 text-primary" />, text: "Versatile developer with hands-on experience across the full stack." },
    { icon: <ShieldCheck className="h-5 w-5 text-primary" />, text: "Skilled in application security and penetration testing." },
    { icon: <Puzzle className="h-5 w-5 text-primary" />, text: "Proven problem-solver with strong algorithmic and data structure skills." },
    { icon: <Code className="h-5 w-5 text-primary" />, text: "Passionate about leveraging AI and ML to build intelligent applications." },
  ]
};


const ResumePage = () => {
    
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
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
                <p className="font-headline text-lg font-medium text-primary">My Resume</p>
                <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Professional Journey
                </h1>
                <p className="mt-2 text-muted-foreground">Experience, Education & Achievements</p>
            </div>
            <Button asChild className="mt-4 md:mt-0 button-gradient-primary shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-target">
                <Link href="/Bharath_Kiran_Resume.pdf" download="Bharath_Kiran_Resume.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                </Link>
            </Button>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-white/5 border border-white/10 p-1 h-auto">
            <TabsTrigger value="experience" className="cursor-target">Experience</TabsTrigger>
            <TabsTrigger value="education" className="cursor-target">Education</TabsTrigger>
            <TabsTrigger value="skills" className="cursor-target">Skills</TabsTrigger>
            <TabsTrigger value="certifications" className="cursor-target">Certifications</TabsTrigger>
            <TabsTrigger value="profile" className="cursor-target">Profile</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="mt-8">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-primary/20" />
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative mb-12 cursor-target transition-all duration-300 hover:bg-white/5 p-4 rounded-lg"
                >
                  <div className="absolute -left-10 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-8 ring-background" />
                  <p className="text-sm font-semibold text-primary">{item.date}</p>
                  <h3 className="mt-1 text-xl font-bold font-headline text-white">{item.position}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <p className="text-muted-foreground">{item.company}</p>
                  </div>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tech.map((techItem) => (
                      <Badge key={techItem} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {techItem}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-8">
             <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <Card className="bg-white/5 border-white/10 cursor-target shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-transform">
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-primary font-semibold">{education.degree}</p>
                                <CardTitle className="font-headline text-2xl mt-1">{education.institution}</CardTitle>
                                <div className="flex items-center gap-4 text-muted-foreground mt-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{education.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className="h-4 w-4" />
                                        <span>CGPA: {education.gpa}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full text-sm">
                                <Star className="h-4 w-4" />
                                {education.achievement}
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h4 className="font-semibold text-white mb-2">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                            {education.courses.map(course => (
                                <Badge key={course} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{course}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
             </motion.div>
          </TabsContent>

          <TabsContent value="skills" className="mt-8">
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="font-headline">Technical Skills</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {techSkills.map(skill => (
                                <div key={skill.name} className="cursor-target">
                                    <div className="flex justify-between items-center mb-1">
                                        <div className="flex items-center gap-2">
                                            {skill.icon}
                                            <span className="font-medium text-white">{skill.name}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{skill.proficiency}%</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-primary/10">
                                        <motion.div
                                            className="h-2 rounded-full bg-primary"
                                            style={{ width: `${skill.proficiency}%` }}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.proficiency}%` }}
                                            transition={{ duration: 0.5, ease: 'easeOut' }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <CardTitle className="font-headline">Soft Skills</CardTitle>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            {softSkills.map(skill => (
                                <div key={skill.name} className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 cursor-target">
                                    <h4 className="font-semibold text-white">{skill.name}</h4>
                                    <p className="text-xs text-muted-foreground mt-1">{skill.description}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </motion.div>
          </TabsContent>
          
          <TabsContent value="certifications" className="mt-8">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {certifications.map((cert, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <Card className="bg-white/5 border-white/10 group h-full flex flex-col cursor-target shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-transform">
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Award className="h-8 w-8" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg font-headline">{cert.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{cert.issuer} - {cert.year}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow flex items-end justify-between">
                                <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Verified
                                </Badge>
                                <Link href={cert.link} target="_blank" className="text-sm text-primary hover:underline cursor-target">
                                    View Certificate
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="profile" className="mt-8">
            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <Card className="bg-white/5 border-white/10">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Professional Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">{resumeProfile.summary}</p>
                        <div>
                            <h4 className="font-semibold text-white mb-3">Key Highlights:</h4>
                            <ul className="space-y-2">
                                {resumeProfile.highlights.map((highlight, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        {highlight.icon}
                                        <span className="text-muted-foreground">{highlight.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex items-center gap-4 pt-4">
                           <Button asChild className="button-gradient-primary shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-target">
                                <Link href="/Bharath_Kiran_Resume.pdf" download="Bharath_Kiran_Resume.pdf">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Resume
                                </Link>
                            </Button>
                            <Button variant="outline" asChild className="hover:bg-primary/10 hover:text-primary transition-colors cursor-target hover:scale-105">
                                <Link href="https://www.linkedin.com/in/bharath-kiran-obilisetty-289b1022b" target="_blank">
                                    <User className="mr-2 h-4 w-4" />
                                    LinkedIn Profile
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
          </TabsContent>

        </Tabs>
    </div>
  );
};

export default ResumePage;

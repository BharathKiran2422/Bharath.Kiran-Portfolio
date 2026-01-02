
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ArrowRight, Bookmark, Calendar, Clock, Search } from 'lucide-react';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const blogPosts = [
    {
        title: "10 UI/UX Principles for a Better User Experience",
        excerpt: "Discover the fundamental principles that transform your designs from good to great. Learn about hierarchy, consistency, feedback, and more.",
        author: {
            name: "Bharath Kiran",
            photo: "/profile.pic.png"
        },
        date: "July 15, 2024",
        readTime: "8 min read",
        categories: ["UX Design", "Best Practices"],
        image: placeholderImages.blogThumb1,
        featured: true
    },
    {
        title: "Mastering Tailwind CSS: Tips and Tricks",
        excerpt: "A comprehensive guide to writing better utility-first CSS with Tailwind. From custom configurations to performance optimization.",
        author: {
            name: "Bharath Kiran",
            photo: "/profile.pic.png"
        },
        date: "June 20, 2024",
        readTime: "6 min read",
        categories: ["CSS", "Tutorial"],
        image: placeholderImages.blogThumb2
    },
    {
        title: "Introduction to State Management in React",
        excerpt: "Understanding useState, useReducer, and Context API. When to use what and best practices for managing application state.",
        author: {
            name: "Bharath Kiran",
            photo: "/profile.pic.png"
        },
        date: "May 30, 2024",
        readTime: "10 min read",
        categories: ["React", "JavaScript"],
        image: placeholderImages.blogThumb3
    },
    {
        title: "Web Application Security: OWASP Top 10 Explained",
        excerpt: "A beginner-friendly breakdown of the most critical security risks in web applications and how to prevent them.",
        author: {
            name: "Bharath Kiran",
            photo: "/profile.pic.png"
        },
        date: "April 18, 2024",
        readTime: "12 min read",
        categories: ["Security", "Web Development"],
        image: placeholderImages.blogThumb4
    },
    {
        title: "Getting Started with Machine Learning in Python",
        excerpt: "Your first steps into ML: setting up your environment, understanding basic algorithms, and building your first model.",
        author: {
            name: "Bharath Kiran",
            photo: "/profile.pic.png"
        },
        date: "March 25, 2024",
        readTime: "15 min read",
        categories: ["Python", "Machine Learning"],
        image: placeholderImages.blogThumb5
    },
];

const categories = ["UX Design", "Best Practices", "CSS", "Tutorial", "React", "JavaScript", "Security", "Web Development", "Python", "Machine Learning"];
const popularPosts = [blogPosts[1], blogPosts[2], blogPosts[3]];

const BlogPage = () => {

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
    
    const featuredPost = blogPosts.find(p => p.featured);
    const regularPosts = blogPosts.filter(p => !p.featured);

    return (
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="text-center mb-12">
                <p className="font-headline text-lg font-medium text-primary">My Blog</p>
                <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    Thoughts & Insights
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    Sharing my learnings in development, design, and tech.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Main Content */}
                <div className="lg:col-span-8">
                    {featuredPost && (
                        <motion.div variants={itemVariants} className="mb-12">
                            <Card className="relative group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 cursor-target shadow-lg hover:shadow-primary/20">
                                <div className="md:flex">
                                    <div className="md:w-1/2">
                                        <Image
                                            src={featuredPost.image.src}
                                            alt={featuredPost.image.alt}
                                            width={featuredPost.image.width}
                                            height={featuredPost.image.height}
                                            data-ai-hint={featuredPost.image.hint}
                                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                                        <div>
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {featuredPost.categories.map(cat => (
                                                    <Badge key={cat} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{cat}</Badge>
                                                ))}
                                            </div>
                                            <h2 className="font-headline text-2xl font-bold text-white mb-3">{featuredPost.title}</h2>
                                            <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4"/>
                                                    <span>{featuredPost.date}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4"/>
                                                    <span>{featuredPost.readTime}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Image src={featuredPost.author.photo} alt={featuredPost.author.name} width={40} height={40} className="rounded-full" />
                                                    <span className="font-semibold text-white">{featuredPost.author.name}</span>
                                                </div>
                                                <Button asChild variant="link" className="text-primary cursor-target hover:scale-105 transition-transform">
                                                    <Link href="#">Read More <ArrowRight className="ml-1 h-4 w-4"/></Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    )}
                    
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: true}} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {regularPosts.map((post, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 h-full flex flex-col cursor-target shadow-lg hover:shadow-primary/20">
                                    <CardHeader className="p-0">
                                        <Image
                                            src={post.image.src}
                                            alt={post.image.alt}
                                            width={post.image.width}
                                            height={post.image.height}
                                            data-ai-hint={post.image.hint}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </CardHeader>
                                    <CardContent className="p-6 flex flex-col flex-grow">
                                        <div className="flex-grow">
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {post.categories.map(cat => (
                                                    <Badge key={cat} variant="secondary" className="bg-primary/10 text-primary border-primary/20">{cat}</Badge>
                                                ))}
                                            </div>
                                            <h3 className="font-headline text-xl font-bold text-white mb-2">{post.title}</h3>
                                            <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                                        </div>
                                        <div className="mt-auto">
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <span>{post.date}</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                     <div className="mt-12 text-center">
                        <Button variant="outline" className="cursor-target hover:scale-105 transition-transform">Load More Posts</Button>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader><h3 className="font-headline text-xl font-bold text-white">Categories</h3></CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <Link href="#" className="flex justify-between items-center text-muted-foreground hover:text-primary transition-colors cursor-target">
                                            <span>{cat}</span>
                                            <Badge variant="secondary">{blogPosts.filter(p => p.categories.includes(cat)).length}</Badge>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader><h3 className="font-headline text-xl font-bold text-white">Popular Posts</h3></CardHeader>
                        <CardContent className="space-y-4">
                            {popularPosts.map((post, index) => (
                                <Link key={index} href="#" className="flex items-center gap-4 group cursor-target">
                                    <Image src={post.image.src} alt={post.image.alt} data-ai-hint={post.image.hint} width={80} height={80} className="rounded-lg object-cover" />
                                    <div>
                                        <p className="font-semibold text-white group-hover:text-primary transition-colors">{post.title}</p>
                                        <p className="text-xs text-muted-foreground">{post.date}</p>
                                    </div>
                                </Link>
                            ))}
                        </CardContent>
                    </Card>
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader><h3 className="font-headline text-xl font-bold text-white">Get Tech Tips Weekly</h3></CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4 text-sm">Join my newsletter for weekly tips on web development and AI.</p>
                            <div className="flex gap-2">
                                <Input placeholder="your.email@example.com" className="bg-white/5" />
                                <Button className="button-gradient-primary cursor-target hover:scale-105 transition-transform">Subscribe</Button>
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </div>
        </div>
    );
};

export default BlogPage;

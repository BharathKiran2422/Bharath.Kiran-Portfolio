"use client";

import dynamic from 'next/dynamic';
import Footer from '@/components/footer';

const Header = dynamic(() => import('@/components/header'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/sections/hero-section'), { ssr: false });
const AboutSection = dynamic(() => import('@/components/sections/about-section'), { ssr: false });
const ResumeSection = dynamic(() => import('@/components/sections/resume-section'), { ssr: false });
const WorkSection = dynamic(() => import('@/components/sections/work-section'), { ssr: false });
const BlogSection = dynamic(() => import('@/components/sections/blog-section'), { ssr: false });
const PhotoGallerySection = dynamic(() => import('@/components/sections/photo-gallery-section'), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/contact-section'), { ssr: false });


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <WorkSection />
        <BlogSection />
        <PhotoGallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

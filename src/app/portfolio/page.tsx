
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PortfolioPage = () => {
  return (
    <div className="flex-grow">
      <motion.main
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 py-16 md:py-24"
      >
        <div className="text-center">
          <p className="font-headline text-lg font-medium text-primary">My Work</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Portfolio Showcase
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            This section is currently under construction. Please check back soon to see a collection of my latest projects. In the meantime, feel free to explore other parts of my site.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="button-gradient-primary shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default PortfolioPage;

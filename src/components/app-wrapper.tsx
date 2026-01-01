
'use client';

import { motion } from 'framer-motion';
import BackToTopButton from './back-to-top-button';
import ScrollProgressBar from './scroll-progress-bar';

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
    >
        <ScrollProgressBar />
        <main className="relative flex-grow">
            {children}
        </main>
        <BackToTopButton />
    </motion.div>
  );
}

import Link from 'next/link';
import { Github, Linkedin, Mountain, Send } from 'lucide-react';
import { SiCodepen, SiDevdotto } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-headline text-lg font-bold">Bharath Kiran</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Bharath Kiran Obilisetty. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/BharathKiran2422" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/bharath-kiran/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="CodePen">
              <SiCodepen className="h-5 w-5" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Dev.to">
              <SiDevdotto className="h-5 w-5" />
            </a>
            <a href="mailto:bharathkiranobilisetty@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Send className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

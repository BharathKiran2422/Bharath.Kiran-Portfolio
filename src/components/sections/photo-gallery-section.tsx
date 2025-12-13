"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Section, SectionTitle, SectionSubtitle } from "@/components/section-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Camera, Code, Users, Star, Mountain, Image as ImageIcon } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";


type Category = "all" | "development" | "events" | "behind-the-scenes" | "personal" | "nature";

const photos = [
  { src: "https://placehold.co/800x600.png", alt: "Development Screenshot 1", category: "development", hint: "dashboard analytics", className: "md:col-span-2" },
  { src: "https://placehold.co/600x800.png", alt: "College Workshop", category: "events", hint: "workshop presentation", className: "md:row-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Team Collaboration", category: "behind-the-scenes", hint: "team meeting" },
  { src: "https://placehold.co/600x400.png", alt: "Personal Branding Photo", category: "personal", hint: "man portrait" },
  { src: "https://placehold.co/600x800.png", alt: "Mountain Landscape", category: "nature", hint: "mountain landscape", className: "md:row-span-2" },
  { src: "https://placehold.co/800x600.png", alt: "App UI Mockup", category: "development", hint: "mobile app", className: "md:col-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Hackathon Event", category: "events", hint: "hackathon event" },
  { src: "https://placehold.co/600x400.png", alt: "Candid Work Moment", category: "behind-the-scenes", hint: "people working" },
  { src: "https://placehold.co/600x400.png", alt: "Travel Highlight", category: "personal", hint: "city travel" },
  { src: "https://placehold.co/600x400.png", alt: "Nature Close-up", category: "nature", hint: "forest path" },
  { src: "https://placehold.co/800x600.png", alt: "Code on Screen", category: "development", hint: "programming code", className: "md:col-span-2" },
  { src: "https://placehold.co/600x400.png", alt: "Conference Talk", category: "events", hint: "public speaking" },
];

const tabs: { key: Category; label: string; icon: React.ReactNode }[] = [
  { key: "all", label: "All", icon: <Camera className="mr-2 h-4 w-4" /> },
  { key: "development", label: "Development", icon: <Code className="mr-2 h-4 w-4" /> },
  { key: "events", label: "Events", icon: <Users className="mr-2 h-4 w-4" /> },
  { key: "behind-the-scenes", label: "Behind the Scenes", icon: <ImageIcon className="mr-2 h-4 w-4" /> },
  { key: "personal", label: "Personal", icon: <Star className="mr-2 h-4 w-4" /> },
  { key: "nature", label: "Nature", icon: <Mountain className="mr-2 h-4 w-4" /> },
];

const INITIAL_DESKTOP_LIMIT = 6;
const INITIAL_MOBILE_LIMIT = 2;

const GalleryGrid = ({ photos, category }: { photos: typeof photos, category: Category }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  const filteredPhotos = category === 'all' ? photos : photos.filter(p => p.category === category);

  const initialLimit = isMobile ? INITIAL_MOBILE_LIMIT : INITIAL_DESKTOP_LIMIT;

  if (filteredPhotos.length === 0) return null;

  const displayedPhotos = isExpanded ? filteredPhotos : filteredPhotos.slice(0, initialLimit);

  const handleToggle = () => {
    if (isExpanded) {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsExpanded(!isExpanded);
  }

  return (
    <div ref={sectionRef}>
      <motion.div 
        layout
        className="min-h-[250px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4"
          >
            {displayedPhotos.map((photo, index) => (
              <motion.div
                layout
                key={`${photo.alt}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={cn("relative min-h-[250px] w-full overflow-hidden rounded-lg shadow-lg group", photo.className)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  data-ai-hint={photo.hint}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <p className="text-white text-sm font-medium">{photo.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {filteredPhotos.length > initialLimit && (
        <div className="mt-8 text-center">
          <motion.button
            onClick={handleToggle}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-background px-8 py-3 font-medium text-foreground shadow-lg transition-all duration-300 hover:shadow-primary/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-primary/50 to-primary/30 transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="relative">{isExpanded ? "View Less" : "View More"}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <IoIosArrowDown />
            </motion.div>
          </motion.button>
        </div>
      )}
    </div>
  )
}

export default function PhotoGallerySection() {
  const [activeTab, setActiveTab] = useState<Category>("all");

  return (
    <Section id="gallery" className="bg-card" suppressHydrationWarning>
      <SectionTitle>Photo Gallery</SectionTitle>
      <SectionSubtitle>
        A collection of moments from my professional and personal life.
      </SectionSubtitle>
      
      <div className="flex flex-wrap justify-center gap-4 my-12">
        {tabs.map((tab) => (
          <Button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            variant={activeTab === tab.key ? "default" : "outline"}
            className={cn("w-full sm:w-auto justify-center", activeTab !== tab.key && "bg-muted/50 dark:bg-card hover:bg-muted dark:hover:bg-muted/50")}
          >
            {tab.icon}
            {tab.label}
          </Button>
        ))}
      </div>
      
      <GalleryGrid photos={photos} category={activeTab} />
    </Section>
  );
}

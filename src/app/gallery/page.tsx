
'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Maximize } from 'lucide-react';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { Lightbox } from '@/components/lightbox';

type PhotoCategory = 'Workspace' | 'Events' | 'Projects' | 'Team' | 'Learning';

type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  hint: string;
  caption: string;
  date: string;
  category: PhotoCategory;
};

const photosData: Photo[] = [
  { ...placeholderImages.galleryWorkspace1, caption: "My coding sanctuary", date: "2024", category: "Workspace" },
  { ...placeholderImages.galleryEvent1, caption: "Hackathon-winning team!", date: "2023", category: "Events" },
  { ...placeholderImages.galleryProject1, caption: "Mapping out the next big feature", date: "2024", category: "Projects" },
  { ...placeholderImages.galleryTeam1, caption: "The amazing folks at DataValley", date: "2024", category: "Team" },
  { ...placeholderImages.galleryLearning1, caption: "Always learning, always growing", date: "2023", category: "Learning" },
  { ...placeholderImages.galleryWorkspace2, caption: "Fueled by coffee and code", date: "2024", category: "Workspace" },
  { ...placeholderImages.galleryEvent2, caption: "Sharing insights at a local meetup", date: "2024", category: "Events" },
  { ...placeholderImages.galleryProject2, caption: "Finalizing the mobile UI", date: "2023", category: "Projects" },
  { ...placeholderImages.galleryTeam2, caption: "Pair programming in action", date: "2024", category: "Team" },
  { ...placeholderImages.galleryLearning2, caption: "Another certification in the bag", date: "2024", category: "Learning" },
];

const filters: ('All' | PhotoCategory)[] = ['All', 'Workspace', 'Events', 'Projects', 'Team', 'Learning'];

const GalleryPage = () => {
    const [activeFilter, setActiveFilter] = useState<'All' | PhotoCategory>('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const filteredPhotos = useMemo(() => {
        if (activeFilter === 'All') return photosData;
        return photosData.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const openLightbox = useCallback((index: number) => {
        const globalIndex = photosData.findIndex(p => p.src === filteredPhotos[index].src);
        setSelectedIndex(globalIndex);
        setLightboxOpen(true);
    }, [filteredPhotos]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

  return (
    <>
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="font-headline text-lg font-medium text-primary">My Gallery</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Moments & Milestones
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into my journey - work, events, and experiences.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
            {filters.map(filter => (
                <Button 
                    key={filter}
                    variant={activeFilter === filter ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(filter)}
                    className="transition-all cursor-target hover:scale-105"
                >
                    {filter}
                </Button>
            ))}
        </div>

        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
            {filteredPhotos.map((photo, index) => (
                <motion.div
                    key={photo.src}
                    variants={itemVariants}
                    className="break-inside-avoid group relative rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer cursor-target shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-transform"
                    onClick={() => openLightbox(index)}
                >
                    <Image 
                        src={photo.src}
                        alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
                        data-ai-hint={photo.hint}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <Maximize className="absolute top-4 right-4 h-6 w-6 text-white opacity-80" />
                        <h4 className="font-bold text-white text-lg">{photo.caption}</h4>
                        <p className="text-white/80 text-sm">{photo.date}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
        
        {filteredPhotos.length === 0 && (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="text-center py-16">
                <p className="text-muted-foreground text-lg">No photos found in this category yet. Check back soon!</p>
            </motion.div>
        )}

      </div>
      
      <Lightbox
          open={lightboxOpen}
          onOpenChange={setLightboxOpen}
          images={photosData}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
      />
    </>
  );
};

export default GalleryPage;

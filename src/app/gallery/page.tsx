
'use client';

import React, { useState, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Maximize, ChevronDown, ChevronUp } from 'lucide-react';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { Lightbox } from '@/components/lightbox';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type PhotoCategory = 'Development' | 'Events' | 'Behind the Scenes' | 'Personal' | 'Nature';

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
  { ...placeholderImages.galleryWorkspace1, caption: "My coding sanctuary", date: "2024", category: "Development" },
  { ...placeholderImages.galleryEvent1, caption: "Hackathon-winning team!", date: "2023", category: "Events" },
  { ...placeholderImages.galleryProject1, caption: "Mapping out the next big feature", date: "2024", category: "Development" },
  { ...placeholderImages.galleryTeam1, caption: "The amazing folks at DataValley", date: "2024", category: "Behind the Scenes" },
  { ...placeholderImages.galleryLearning1, caption: "Always learning, always growing", date: "2023", category: "Personal" },
  { ...placeholderImages.galleryWorkspace2, caption: "Fueled by coffee and code", date: "2024", category: "Development" },
  { ...placeholderImages.galleryEvent2, caption: "Sharing insights at a local meetup", date: "2024", category: "Events" },
  { ...placeholderImages.galleryProject2, caption: "Finalizing the mobile UI", date: "2023", category: "Development" },
  { ...placeholderImages.galleryTeam2, caption: "Pair programming in action", date: "2024", category: "Behind the Scenes" },
  { ...placeholderImages.galleryLearning2, caption: "Another certification in the bag", date: "2024", category: "Personal" },
  { src: 'https://picsum.photos/seed/nature1/800/600', width: 800, height: 600, alt: 'A serene forest path', hint: 'forest path', caption: 'Exploring local trails', date: '2023', category: 'Nature' },
  { src: 'https://picsum.photos/seed/personal1/600/800', width: 600, height: 800, alt: 'A person reading a book', hint: 'reading book', caption: 'Quiet moments', date: '2023', category: 'Personal' },
  { src: 'https://picsum.photos/seed/dev1/800/600', width: 800, height: 600, alt: 'Complex algorithm on a whiteboard', hint: 'algorithm whiteboard', caption: 'Solving complex problems', date: '2024', category: 'Development' },
  { src: 'https://picsum.photos/seed/event3/800/600', width: 800, height: 600, alt: 'Networking at a conference', hint: 'tech conference', caption: 'Connecting with peers', date: '2024', category: 'Events' },
  { src: 'https://picsum.photos/seed/bts1/800/600', width: 800, height: 600, alt: 'A messy desk with coffee cups', hint: 'messy desk', caption: 'The creative chaos', date: '2024', category: 'Behind the Scenes' },
  { src: 'https://picsum.photos/seed/nature2/600/800', width: 600, height: 800, alt: 'A mountain peak at sunrise', hint: 'mountain sunrise', caption: 'Morning hike views', date: '2023', category: 'Nature' },
  { src: 'https://picsum.photos/seed/dev2/800/600', width: 800, height: 600, alt: 'A group of developers collaborating', hint: 'developer collaboration', caption: 'Team brainstorming session', date: '2024', category: 'Development' },
  { src: 'https://picsum.photos/seed/personal2/800/600', width: 800, height: 600, alt: 'A person playing badminton', hint: 'playing badminton', caption: 'A friendly match', date: '2024', category: 'Personal' },
  { src: 'https://picsum.photos/seed/event4/800/600', width: 800, height: 600, alt: 'A workshop presentation screen', hint: 'workshop presentation', caption: 'Leading a workshop', date: '2023', category: 'Events' },
  { src: 'https://picsum.photos/seed/bts2/600/800', width: 600, height: 800, alt: 'A close-up of a keyboard', hint: 'mechanical keyboard', caption: 'The tools of the trade', date: '2024', category: 'Behind the Scenes' },
  { src: 'https://picsum.photos/seed/nature3/800/600', width: 800, height: 600, alt: 'A calm lake reflecting the sky', hint: 'calm lake', caption: 'Lakeside tranquility', date: '2022', category: 'Nature' },
  { src: 'https://picsum.photos/seed/dev3/800/600', width: 800, height: 600, alt: 'A server room with glowing lights', hint: 'server room', caption: 'Inspecting the infrastructure', date: '2023', category: 'Development' },
  { src: 'https://picsum.photos/seed/personal3/800/600', width: 800, height: 600, alt: 'A person cycling on a trail', hint: 'cycling trail', caption: 'Weekend cycling adventure', date: '2024', category: 'Personal' },
  { src: 'https://picsum.photos/seed/dev4/600/800', width: 600, height: 800, alt: 'Debugging code on a laptop', hint: 'debugging code', caption: 'The late-night bug hunt', date: '2024', category: 'Development' },
];

const filters: ('All' | PhotoCategory)[] = ['All', 'Development', 'Events', 'Behind the Scenes', 'Personal', 'Nature'];
const INITIAL_ITEMS = 6;

const GalleryPage = () => {
    const [activeFilter, setActiveFilter] = useState<'All' | PhotoCategory>('All');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);
    const galleryRef = useRef<HTMLDivElement>(null);

    const filteredPhotos = useMemo(() => {
        if (activeFilter === 'All') return photosData;
        return photosData.filter(p => p.category === activeFilter);
    }, [activeFilter]);

    const itemsToShow = isExpanded ? filteredPhotos.length : INITIAL_ITEMS;
    const hasMoreItems = filteredPhotos.length > INITIAL_ITEMS;
    const hiddenItemsCount = filteredPhotos.length - INITIAL_ITEMS;

    const handleFilterChange = (filter: 'All' | PhotoCategory) => {
        setActiveFilter(filter);
        setIsExpanded(false);
    };

    const toggleExpand = () => {
        if (!isExpanded) {
            setIsExpanded(true);
        } else {
            if (galleryRef.current) {
                galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Add a delay to allow the scroll to happen before collapsing
            setTimeout(() => {
                setIsExpanded(false);
            }, 500);
        }
    };

    const openLightbox = useCallback((index: number) => {
        const currentlyVisiblePhotos = filteredPhotos.slice(0, itemsToShow);
        const globalIndex = photosData.findIndex(p => p.src === currentlyVisiblePhotos[index].src);
        setSelectedIndex(globalIndex);
        setLightboxOpen(true);
    }, [filteredPhotos, itemsToShow]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };
    
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { opacity: 0, y: -20 }
    };
    
    const getCategoryCount = (category: 'All' | PhotoCategory) => {
        if (category === 'All') return photosData.length;
        return photosData.filter(p => p.category === category).length;
    };


  return (
    <>
      <div ref={galleryRef} className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="font-headline text-lg font-medium text-primary">My Gallery</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold font-headline tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Moments & Milestones
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A glimpse into my journey - work, events, and experiences.
          </p>
        </div>

        <div className="sticky top-20 md:top-24 z-30 bg-background/80 backdrop-blur-lg -mx-4 sm:mx-0 px-4 sm:px-0 py-4 mb-8">
            <div className="flex justify-start sm:justify-center items-center gap-2 overflow-x-auto pb-2 -mb-2 no-scrollbar">
                {filters.map(filter => (
                    <button 
                        key={filter}
                        onClick={() => handleFilterChange(filter)}
                        className={cn(
                            "relative shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors cursor-target hover:text-white",
                            activeFilter === filter ? "text-white" : "text-muted-foreground"
                        )}
                    >
                        {filter}
                        <Badge variant="secondary" className="ml-2">{getCategoryCount(filter)}</Badge>
                         {activeFilter === filter && (
                            <motion.div 
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-violet-500"
                                layoutId="active-filter-underline"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>

        {filteredPhotos.length > 0 ? (
            <>
                <motion.div
                    layout
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
                >
                    <AnimatePresence>
                        {filteredPhotos.slice(0, itemsToShow).map((photo, index) => (
                            <motion.div
                                key={photo.src}
                                layout
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
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
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <Maximize className="absolute top-4 right-4 h-6 w-6 text-white opacity-80" />
                                    <h4 className="font-bold text-white text-lg">{photo.caption}</h4>
                                    <p className="text-white/80 text-sm">{photo.date}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {hasMoreItems && (
                    <div className="mt-12 text-center">
                        <Button 
                            size="lg"
                            onClick={toggleExpand}
                            className="button-gradient-primary shadow-lg shadow-primary/20 hover:scale-105 transition-transform cursor-target"
                        >
                            {isExpanded ? 'See Less' : `See More (${hiddenItemsCount} hidden)`}
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-2"
                            >
                                <ChevronDown className="h-5 w-5"/>
                            </motion.div>
                        </Button>
                    </div>
                )}
            </>
        ) : (
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="text-center py-16">
                 <Card className="max-w-md mx-auto bg-white/5 border-white/10 p-8">
                    <CardHeader>
                        <ImagePlaceholderIcon className="h-16 w-16 text-muted-foreground mx-auto" />
                        <CardTitle className="mt-4 text-xl">No photos yet!</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">There are no photos in this category yet. Check back soon for updates!</p>
                        <Button onClick={() => handleFilterChange('All')} variant="link" className="mt-4 cursor-target">View All Photos</Button>
                    </CardContent>
                </Card>
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

function ImagePlaceholderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

export default GalleryPage;

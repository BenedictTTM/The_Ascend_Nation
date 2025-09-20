'use client';

import React, { useState, useRef, useEffect, Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { GiAfrica } from "react-icons/gi";
import LoadingSkeleton from '@/components/ui/LoadingSkeleton';

// Dynamic imports with loading states - defer loading until needed
const Expert = dynamic(() => import('@/components/ui/Experts'), {
  loading: () => <LoadingSkeleton type="expert" />,
  ssr: false
});

const ImagesLoop = dynamic(() => import('@/components/ui/ImagesLoop'), {
  loading: () => <LoadingSkeleton type="images" />,
  ssr: false
});

export default function Home() {
  const [containerHeight, setContainerHeight] = useState(600);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Dynamic height calculation based on viewport
  useEffect(() => {
    const updateHeight = () => {
      const viewportHeight = window.innerHeight;
      const headerHeight = 1; // approximate header height
      const availableHeight = Math.max(600, viewportHeight - headerHeight);
      setContainerHeight(availableHeight);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 lg:pt-2">
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight font-['Poppins']">
                  {/* PRE-TITLE BADGE */}
                  <motion.span
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="block text-[0.6rem] sm:text-xs md:text-sm font-medium tracking-wide text-emerald-700 max-w-3xs bg-emerald-50 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full ring-1 ring-emerald-500/10 shadow-sm mb-2 sm:mb-3 lg:mb-4 text-center lg:text-left"
                  >
                    Pan-African Youth Empowerment
                  </motion.span>
                  {/* HEADLINE */}
                  <motion.span 
                    className="text-emerald-600 inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Transform.
                  </motion.span>{' '}
                  <motion.span 
                    className="text-emerald-600 inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Aspire.
                  </motion.span>{' '}
                  <motion.span 
                    className="text-rose-600 inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Network.
                  </motion.span>
                </h1>
                
                <motion.p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg lg:max-w-xl font-mono font-['Inter']"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Empowering African youth through strategic programs, mentorship, and sustainable development initiatives across all 54 nations.
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Link 
                  href="https://whatsapp.com/channel/0029VbB5XVLHgZWan9Mb4I2X" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-2 text-blue-700 rounded-lg hover:underline underline-offset-4 hover:text-blue-800 transition animate-pulse">
                    Join The Network ⚓
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Interactive Falling Text */}
            <div className="relative lg:pt-2 mt-6 lg:mt-0">
              <div 
                ref={containerRef}
                className="relative w-full overflow-visible min-h-[300px]"
                style={{ 
                  height: `${Math.min(containerHeight * 0.7, 450)}px`
                }}
              >
                <motion.div
                  key="info-card"
                  initial={{ opacity: 0, scale: 0.9, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex items-start justify-center p-4"
                >
                  <div className="backdrop-blur-md rounded-xl lg:rounded-2xl max-w-xs sm:max-w-sm md:max-w-md text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-3 -left-3 w-16 h-16 sm:w-20 sm:h-20 bg-rose-500/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6">
                      <div className="space-y-1.5 sm:space-y-2">
                         <div className="flex justify-center">
                           <GiAfrica size={128} color="#059669" />
                         </div>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 font-['Poppins']">
                          54 African Nations
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed px-1 sm:px-2 font-mono font-['Inter']">
                          United in our mission to empower youth across every corner of the continent. 
                          From the Mediterranean shores to the southern cape, we&rsquo;re building tomorrow&rsquo;s leaders today.
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 sm:gap-1.5 justify-center pt-1 sm:pt-2">
                        <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-medium bg-emerald-100 text-emerald-800">
                          Pan-African Impact
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-xs font-medium bg-rose-100 text-rose-800">
                          Youth Focused
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Background decoration - adjusted for better layering */}
              <div className="absolute -top-4 -right-4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-emerald-500/15 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-rose-600/15 rounded-full blur-3xl -z-10"></div>
            </div>          
          </div>
        </div>
      </section>
      
      {/* Component Sections with Systematic Spacing */}
      <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24">
        <Suspense fallback={<LoadingSkeleton type="images" />}>
          <div className="py-6 sm:py-8 md:py-12 lg:py-16">
            <ImagesLoop />
          </div>
        </Suspense>

        <Suspense fallback={<LoadingSkeleton type="expert" />}>
          <div className="py-6 sm:py-8 md:py-12 lg:py-16">
            <Expert />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

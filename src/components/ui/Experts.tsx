"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "I believe this is the first time an organization has succeeded in developing talent that can compete internationally...",
    author: "PHILLIP LIVERPOOL",
    title: "Former Commercial Director",
    company: "Kosmos Energy",
  },
  {
    id: 2,
    quote:
      "TAN's approach to youth development is revolutionary. They're not just training individuals...",
    author: "AMINA HASSAN",
    title: "Chief Innovation Officer",
    company: "African Development Bank",
  },
  {
    id: 3,
    quote:
      "The quality of graduates from TAN's programs rivals anything we see from top international institutions...",
    author: "DAVID OKAFOR",
    title: "Managing Partner",
    company: "Catalyst Fund",
  },
  {
    id: 4,
    quote:
      "What sets TAN apart is their holistic approach. They're nurturing leaders who understand the unique challenges...",
    author: "FATIMA AL-RASHID",
    title: "Regional Director",
    company: "McKinsey & Company",
  },
  {
    id: 5,
    quote:
      "In my 20 years in tech, I've rarely seen such effective talent development...",
    author: "KWAME ASANTE",
    title: "VP of Engineering",
    company: "Google Africa",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-play logic
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(goToNext, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className=" bg-gradient-to-br from-slate-50 to-white relative"
      aria-label="Testimonials"
      role="region"
      aria-live="polite"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold font-mono text-green-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Industry <span className="text-emerald-600">Experts</span> Are
          Saying About Us
        </motion.h2>

        {/* Main Testimonial Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          <div className="bg-white rounded-3xl  p-10 sm:p-14 lg:p-16 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl"></div>

            {/* Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote className="w-16 h-16 text-emerald-600" />
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
              >
                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-slate-500 leading-relaxed mb-8 font-medium text-center max-w-4xl mx-auto">
                  “{currentTestimonial.quote}”
                </blockquote>

                <div className="text-center">
                  <h4 className="text-xl sm:text-2xl font-bold text-emerald-900 mb-1">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-slate-600 font-medium">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {currentTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md border border-slate-200 flex items-center justify-center text-slate-600 hover:text-rose-600 hover:border-rose-200 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-500/30"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import LoadingSkeleton from '../../components/ui/LoadingSkeleton';

// Dynamic imports
const Card = dynamic(() => import('../../components/Card'), {
  loading: () => <LoadingSkeleton type="card" />,
  ssr: true
});

const Button = dynamic(() => import('../../components/Button'), {
  loading: () => <div className="animate-pulse h-10 bg-gray-200 rounded w-32"></div>,
  ssr: true
});

export default function Programs() {
  const programs = [
    {
      id: 1,
      title: "Youth Leadership Accelerator",
      description:
        "A comprehensive 12-month program designed to develop the next generation of African leaders through intensive training, mentorship, and practical leadership experience.",
      features: [
        "Monthly leadership workshops",
        "One-on-one mentorship with industry leaders",
        "Real-world project implementation",
        "Pan-African networking opportunities",
        "Leadership certification",
      ],
      image: "/youthleader.jpg",
      duration: "12 months",
      participants: "100+ annually",
    },
    {
      id: 2,
      title: "Innovation & Entrepreneurship Hub",
      description:
        "Supporting innovative solutions to African challenges through incubation programs, funding opportunities, and technology transfer initiatives.",
      features: [
        "Startup incubation and acceleration",
        "Access to seed funding and investment",
        "Technology transfer programs",
        "Market research and validation support",
        "IP protection and commercialization",
      ],
      image: "/innovation.jpg",
      duration: "6-18 months",
      participants: "50+ startups annually",
    },
    {
      id: 3,
      title: "Cross-Border Collaboration Network",
      description:
        "Facilitating meaningful connections and partnerships between African youth across different countries, sectors, and disciplines.",
      features: [
        "Virtual and physical networking events",
        "Cross-country exchange programs",
        "Collaborative project platforms",
        "Cultural exchange initiatives",
        "Professional mentorship matching",
      ],
      image: "/crossborder.jpg",
      duration: "Ongoing",
      participants: "1000+ active members",
    },
    {
      id: 4,
      title: "Sustainable Development Initiative",
      description:
        "Promoting environmentally conscious and economically viable development projects that create lasting positive impact in African communities.",
      features: [
        "Community development projects",
        "Environmental conservation programs",
        "Clean energy and technology solutions",
        "Sustainable agriculture initiatives",
        "Social impact measurement",
      ],
      image: "/sustainable.jpg",
      duration: "2-5 years per project",
      participants: "25+ communities impacted",
    },
    {
      id: 5,
      title: "Skills Development & Capacity Building",
      description:
        "Comprehensive training programs designed to develop technical, professional, and life skills that enable African youth to compete globally.",
      features: [
        "Technical skills training (IT, Engineering, etc.)",
        "Professional development workshops",
        "Language and communication skills",
        "Financial literacy and management",
        "Digital literacy programs",
      ],
      image: "/SkillsDevelopment.jpg",
      duration: "3-6 months per course",
      participants: "500+ annually",
    },
    {
      id: 6,
      title: "Knowledge Sharing Platform",
      description:
        "Creating digital and physical platforms for sharing best practices, research findings, and innovative solutions across the African continent.",
      features: [
        "Digital knowledge repository",
        "Research publication platform",
        "Best practices documentation",
        "Expert speaker series",
        "Community of practice networks",
      ],
      image: "/KnowledgeSharing.jpg",
      duration: "Ongoing",
      participants: "Unlimited access",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-blue-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Our Strategic Programs
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              TAN&apos;s comprehensive suite of programs is designed to empower
              African youth through targeted interventions that address key
              development challenges while building sustainable capacity for
              long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`space-y-8 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-brand-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-brand-green-600 font-bold text-lg">
                          {program.id}
                        </span>
                      </div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        {program.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-brand-green-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        Duration: {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-brand-green-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="text-gray-600">
                        {program.participants}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 bg-brand-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <svg
                              className="w-3 h-3 text-brand-green-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-600 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button variant="primary" size="md">
                      Learn More
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Image
                    src={program.image}
                    alt={`${program.title} - TAN program illustration`}
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

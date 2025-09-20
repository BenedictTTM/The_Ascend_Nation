'use client';

import React, { useState, Suspense } from 'react';
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

export default function Membership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const membershipTiers = [
    {
      name: "Associate Member",
      description: "Entry-level membership for young African professionals and students",
      features: [
        "Access to online resources and knowledge platform",
        "Monthly newsletter and updates",
        "Basic networking opportunities",
        "Access to webinars and online workshops",
        "Community forum participation"
      ],
      eligibility: "Ages 18-35, African nationals or diaspora",
      benefits: "Foundation-level access to TAN ecosystem"
    },
    {
      name: "Active Member",
      description: "Full membership for committed individuals ready to engage actively",
      features: [
        "All Associate Member benefits",
        "Priority access to in-person events",
        "Mentorship program participation",
        "Program application privileges",
        "Regional chapter involvement",
        "Voting rights in community decisions"
      ],
      eligibility: "Demonstrated commitment to African development",
      benefits: "Comprehensive access to all TAN programs and services"
    },
    {
      name: "Leader Member",
      description: "Senior membership for established professionals and change-makers",
      features: [
        "All Active Member benefits",
        "Mentor matching opportunities",
        "Leadership training and development",
        "Speaker opportunities at events",
        "Advisory role in program development",
        "Access to exclusive leadership forums"
      ],
      eligibility: "5+ years professional experience, proven leadership",
      benefits: "Leadership development and mentoring opportunities"
    }
  ];

  const sustainabilityPlan = [
    {
      title: "Membership Fees",
      description: "Tiered membership structure providing sustainable revenue while remaining accessible to all economic backgrounds.",
      details: [
        "Sliding scale based on economic status",
        "Student discounts and scholarships",
        "Corporate sponsorship for underprivileged members",
        "Annual membership drives and campaigns"
      ]
    },
    {
      title: "Corporate Partnerships",
      description: "Strategic alliances with corporations committed to African development and youth empowerment.",
      details: [
        "Sponsorship of programs and events",
        "Employee volunteer programs",
        "Skills transfer and mentorship",
        "Technology and resource sharing"
      ]
    },
    {
      title: "Grant Funding",
      description: "Diversified funding portfolio from international development organizations and foundations.",
      details: [
        "Multi-year institutional grants",
        "Project-specific funding",
        "Capacity building grants",
        "Research and innovation funding"
      ]
    },
    {
      title: "Social Enterprise",
      description: "Revenue-generating initiatives that align with our mission while providing financial sustainability.",
      details: [
        "Consulting services for development organizations",
        "Training and workshop facilitation",
        "Digital platform monetization",
        "Impact measurement and evaluation services"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-brand-blue-50 via-white to-brand-green-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
              Join <span className="text-brand-red-600">The Ascend</span> <span className="text-brand-green-500">Network</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Become part of a dynamic community of African youth committed to transforming the continent through collaboration, innovation, and sustainable development.
            </p>
          </div>
        </div>
      </section>

      {/* Target Membership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                Who Can Join <span className="text-brand-red-600">TAN</span>?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                TAN welcomes all African youth and supporters of African development who share our vision of continental transformation.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-8">Our Target Members</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black text-lg mb-2">Young Professionals (22-35)</h4>
                      <p className="text-gray-600 leading-relaxed">Emerging leaders seeking career advancement and networking opportunities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black text-lg mb-2">University Students (18-25)</h4>
                      <p className="text-gray-600 leading-relaxed">Ambitious students preparing for impactful careers in Africa</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black text-lg mb-2">Entrepreneurs & Innovators</h4>
                      <p className="text-gray-600 leading-relaxed">Creative minds developing solutions to African challenges</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black text-lg mb-2">Development Practitioners</h4>
                      <p className="text-gray-600 leading-relaxed">Professionals working in NGOs, government, and international organizations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black text-lg mb-2">African Diaspora</h4>
                      <p className="text-gray-600 leading-relaxed">Africans abroad committed to contributing to continental development</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-green-100 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-brand-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-black text-lg mb-2">Supporters & Allies</h4>
                      <p className="text-gray-600 leading-relaxed">Non-Africans committed to supporting African development</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Card className="bg-gradient-to-br from-brand-blue-50 to-white border-2 border-brand-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <div className="space-y-6">
                    <h3 className="text-xl md:text-2xl font-bold text-brand-black">Membership Benefits</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-brand-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">Access to exclusive networking events</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-brand-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">Mentorship and career guidance</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-brand-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">Skills development opportunities</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-brand-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">Pan-African collaboration projects</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-brand-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">Leadership development programs</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <svg className="w-6 h-6 text-brand-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700 font-medium">Access to funding and resources</span>
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Membership Tiers Section */}
      <section className="relative py-20 bg-gradient-to-br from-brand-blue-50 via-white to-brand-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-opacity-30 bg-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            {/* Professional Header */}
            <div className="text-center mb-12 sm:mb-16 space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-red-600 to-brand-green-500 text-white rounded-full text-sm font-semibold tracking-wide uppercase shadow-lg">
                Choose Your Path to Excellence
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black leading-tight">
                Membership <span className="text-brand-red-600">Tiers</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Unlock unique opportunities to connect, grow, and contribute to Africa's transformation journey.
                Each tier offers carefully designed benefits to accelerate your professional development and impact.
              </p>
            </div>

            {/* Membership Tiers Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {membershipTiers.map((tier) => (
                <Card key={tier.name} className="h-full p-6 sm:p-8 flex flex-col border-2 border-gray-100 hover:border-brand-green-300 transition-all duration-300 hover:shadow-2xl">
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-black">{tier.name}</h3>
                    <p className="text-gray-600 leading-relaxed">{tier.description}</p>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-black mb-2">Features</h4>
                      <ul className="space-y-2">
                        {tier.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="w-4 h-4 text-brand-green-500 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand-green-50 text-brand-green-700">
                        {tier.eligibility}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand-red-50 text-brand-red-700">
                        {tier.benefits}
                      </span>
                    </div>
                  </div>
                  <div className="pt-5">
                    <Button variant="primary" size="md" className="w-full">Choose {tier.name}</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Plan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-reveal">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black">
                <span className="text-brand-green-500">Sustainability</span> Plan
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                TAN&apos;s comprehensive sustainability strategy ensures long-term impact and financial viability while maintaining accessibility for all African youth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {sustainabilityPlan.map((item, index) => (
                <Card 
                  key={item.title} 
                  className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-brand-green-300 bg-gradient-to-br from-white to-gray-50"
                >
                  <div className="p-8 space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 ${
                        index % 2 === 0 ? 'bg-gradient-to-br from-brand-green-100 to-brand-green-200' : 'bg-gradient-to-br from-brand-red-100 to-brand-red-200'
                      }`}>
                        <span className={`font-bold text-2xl ${
                          index % 2 === 0 ? 'text-brand-green-600' : 'text-brand-red-600'
                        }`}>{index + 1}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-brand-black">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                    <ul className="space-y-3">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-brand-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

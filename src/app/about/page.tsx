'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import LoadingSkeleton from '../../components/ui/LoadingSkeleton';
import Tan from '../../../public/TanM.jpg';
import TanCeo from '../../../public/TanCeo.jpg';

// Dynamic import for Card component
const Card = dynamic(() => import('../../components/Card'), {
  loading: () => <LoadingSkeleton type="card" />,
  ssr: true
});

// Since this is a client component, we can't export metadata directly
// The metadata would be handled in layout.tsx or a separate metadata file

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Executive Summary Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-10 sm:space-y-15 lg:space-y-18 mb-12 sm:mb-19 lg:mb-25">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                About <span className="text-emerald-600">The Ascend Network</span>
              </h1>
              <p className="text-base sm:text-md md:text-lg text-slate-500 leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-0">
                A Pan-African platform committed to transforming the continent through youth empowerment, strategic networking, and sustainable development initiatives.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">Executive Summary</h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed">
                <p>
                  The Ascend Network (TAN) represents a paradigm shift in how African youth engage with development, innovation, and leadership across the continent. We are more than a network; we are a movement dedicated to creating sustainable change through collaboration, mentorship, and strategic action.
                </p>
                <p>
                  Our approach combines traditional African values of ubuntu and community with modern technology and global best practices to create solutions that are both locally relevant and internationally competitive.
                </p>
                <p>
                  Since our inception, TAN has been committed to addressing the unique challenges facing African youth while capitalizing on the immense opportunities presented by our continent&apos;s dynamic growth trajectory.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <Image
                src= {Tan}
                alt="TAN team members collaborating on African development initiatives"
                width={500}
                height={400}
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Objectives */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {/* Name and Slogan */}
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                  <span className="text-rose-600">The Ascend Network</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-emerald-600">Transform. Aspire. Network.</p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-500 leading-relaxed max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
                Our name reflects our core belief that every African has the potential to ascend to greater heights, transforming themselves, their communities, and the continent as a whole.
              </p>
            </div>

            {/* Vision, Mission, Objectives Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
              <Card className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Vision</h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    To create a thriving ecosystem where African youth are empowered to lead transformative change, driving sustainable development and prosperity across the continent through innovation, collaboration, and strategic partnerships.
                  </p>
                </div>
              </Card>

              <Card className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 h-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-rose-100 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Mission</h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    To empower African youth through comprehensive mentorship programs, strategic networking opportunities, and innovative capacity-building initiatives that foster leadership, entrepreneurship, and sustainable community development across Africa.
                  </p>
                </div>
              </Card>

              <Card className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 h-full sm:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">Objectives</h3>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    To establish sustainable mentorship networks, create innovative learning platforms, facilitate cross-border collaboration, and develop measurable impact frameworks that advance African youth leadership and continental integration.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Objectives Detail */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            <div className="text-center space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Our Strategic Objectives</h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-0">
                TAN&apos;s objectives are designed to create measurable impact across multiple dimensions of African development.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-emerald-600 font-bold text-xs sm:text-sm">1</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Youth Leadership Development</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Cultivate a new generation of African leaders through comprehensive leadership training, mentorship programs, and practical experience opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-emerald-600 font-bold text-xs sm:text-sm">2</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Cross-Border Networking</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Facilitate meaningful connections between African youth across different countries, sectors, and disciplines to foster continental integration.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-emerald-600 font-bold text-xs sm:text-sm">3</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Innovation & Entrepreneurship</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Support innovative solutions to African challenges through incubation programs, funding opportunities, and technology transfer initiatives.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-rose-600 font-bold text-xs sm:text-sm">4</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Sustainable Development</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Promote environmentally conscious and economically viable development projects that create lasting positive impact in communities.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-rose-600 font-bold text-xs sm:text-sm">5</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Capacity Building</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Develop technical, professional, and life skills that enable African youth to compete globally while addressing local challenges effectively.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                    <span className="text-rose-600 font-bold text-xs sm:text-sm">6</span>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">Knowledge Sharing</h3>
                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">Create platforms for sharing best practices, research findings, and innovative solutions across the African continent and beyond.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-12 lg:mb-16">Meet Our Founder</h2>

            <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto">
              <Card className="text-center p-6 sm:p-8 lg:p-12">
                <div className="space-y-6 sm:space-y-8">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-slate-200 rounded-full mx-auto flex items-center justify-center">
                    <Image
                      src={TanCeo}
                      alt="Kwabena Sarfo Kantanka, Founder of The Ascend Network"
                      width={128}
                      height={128}
                      className="rounded-full"
                      unoptimized
                    />
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-black">Kwabena Sarfo Kantanka</h3>
                    <p className="text-base sm:text-lg text-emerald-600 font-semibold">Founder & CEO</p>
                  </div>
                  <div className="text-sm sm:text-base text-slate-500 leading-relaxed space-y-4 sm:space-y-6 text-left max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto">
                    <p>
                      I’m passionate about networking and capacity building.
                    </p>
                    <p>
                      And I’m interested in Africa’s growth and it’s self reliance through intentional development of our youth, the reason I created The Ascend Network for the youth to develop our capacity to meet the future demands of a better Africa
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

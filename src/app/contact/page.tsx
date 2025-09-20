'use client';

import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';

export default function Contact() {
  return (
    <div className="min-h-screen bg-brand-blue-50">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black">
            Get In <span className="text-brand-green-500">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Ready to join the movement transforming Africa? We&apos;d love to hear from you. 
            Connect with us to learn more about how you can be part of TAN&apos;s mission.
          </p>
        </div>
      </section>

      {/* TAN Conclusion */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">Join the Movement</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-lg text-gray-600">
              <h3 className="text-2xl font-bold text-gray-900">
                The Future of Africa is in Our Hands
              </h3>
              <p>
                The Ascend Network represents more than just a networking platform; 
                it embodies the collective aspirations of a generation determined to 
                rewrite Africa&apos;s narrative.
              </p>
              <p>
                Through TAN, we are building bridges that connect talent to opportunity, 
                passion to purpose, and dreams to reality.
              </p>
              <p>
                Every member who joins TAN brings unique skills, perspectives, 
                and energy to our collective mission.
              </p>
              <p>
                The transformation of Africa begins with each of us taking ownership. 
                Join us, and let&apos;s ascend together toward a brighter future.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-md hover:shadow-xl transition-all bg-white">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Connect with TAN?</h3>
              <ul className="space-y-6">
                {[
                  { title: "Pan-African Network", desc: "Connect with like-minded individuals across all 54 African countries" },
                  { title: "Transformative Impact", desc: "Be part of initiatives that create measurable change in communities" },
                  { title: "Personal Growth", desc: "Access mentorship, training, and leadership development opportunities" },
                  { title: "Career Advancement", desc: "Discover opportunities, partnerships, and career development resources" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex-shrink-0 text-green-600">✔</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to connect with our team across Africa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Email */}
            <div className="p-8 rounded-2xl shadow hover:shadow-lg transition-all bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Email Us</h3>
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMail size={20} color="#059669" aria-hidden="true" />
                    <span>General Inquiries:</span>
                  </div>
                  <a href="mailto:info@tan.africa" className="text-green-600 font-medium hover:underline break-all">
                    info@tan.africa
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMail size={20} color="#059669" aria-hidden="true" />
                    <span>Partnership Opportunities:</span>
                  </div>
                  <a href="mailto:partnerships@tan.africa" className="text-green-600 font-medium hover:underline break-all">
                    partnerships@tan.africa
                  </a>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="p-8 rounded-2xl shadow hover:shadow-lg transition-all bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Our Reach</h3>
              <p className="flex items-center gap-2 font-medium text-gray-900">
                <FiMapPin size={20} color="#059669" aria-hidden="true" />
                 Headquarters: Accra, Ghana
              </p>
              <p className="text-gray-600 mt-3">
                Regional Offices: Lagos, Nairobi, Cape Town, Cairo
              </p>
            </div>

            {/* Socials */}
            <div className="p-8 text-center rounded-2xl shadow hover:shadow-lg transition-all bg-white">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Follow Us</h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm ring-1 ring-blue-100 hover:ring-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-blue-600 text-white shadow-sm">
                    <FaLinkedin size={14} />
                  </span>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a
                  href="https://www.instagram.com/the.ascendnetwork?igsh=bXllNzN5MG11cW9j&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-600 shadow-sm ring-1 ring-pink-100 hover:ring-pink-200 hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-white text-pink-600 border border-pink-200 shadow-sm">
                    <FaInstagram size={14} />
                  </span>
                  <span className="font-medium">Instagram</span>
                </a>

                <a
                  href="https://whatsapp.com/channel/0029VbB5XVLHgZWan9Mb4I2X"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 bg-gradient-to-r from-green-50 to-green-100 text-green-700 shadow-sm ring-1 ring-green-100 hover:ring-green-200 hover:shadow-md hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-green-600 text-white shadow-sm">
                    <FaWhatsapp size={14} />
                  </span>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


'use client';

import React from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import Image from "next/image";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 9454049020"],
      description: "Available Mon-Sat, 9:00 AM to 6:00 PM",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@thephenixcarpets.com", "trade@thephenixcarpets.com"],
      description: "We'll respond within 24 hours",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      details: [
        "Gaderiyapur, Mondh, Bhadohi, Uttar Pradesh, India 221406"
      ],
      description: "Experience our craftsmanship in person",
      gradient: "from-pink-400 to-red-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      description: "Indian Standard Time (IST)",
      gradient: "from-red-400 to-orange-500",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    window.location.href = "mailto:info@thephenixcarpets.com";
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <PageBanner
        title="Contact Us"
        subtitle="Get in Touch with Our Experts"
        backgroundImage="url('/images/0005.jpg')"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -z-10 opacity-10">
          <div className="w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 opacity-10">
          <div className="w-96 h-96 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Enhanced Contact Form */}
          <div className="relative bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-start text-sm font-medium text-gray-700 mb-1 transition-colors group-focus-within:text-blue-600">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-start text-sm font-medium text-gray-700 mb-1 transition-colors group-focus-within:text-blue-600">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
                      required
                    />
                  </div>
                </div>
                <div className="group">
                  <label className="block text-start text-sm font-medium text-gray-700 mb-1 transition-colors group-focus-within:text-blue-600">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm text-start font-medium text-gray-700 mb-1 transition-colors group-focus-within:text-blue-600">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-start text-sm font-medium text-gray-700 mb-1 transition-colors group-focus-within:text-blue-600">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced Company Image and Map */}
          <div className="group rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl">
            <div className="relative h-screen w-full">
              <Image
                src="/images/007_1.jpg"
                alt="Phenix Carpets Showroom"
                fill
                className="object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${info.gradient}`}></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div
                  className={`mb-4 p-3 rounded-full bg-gradient-to-r ${info.gradient} text-white transform group-hover:scale-110 transition-transform duration-500`}
                >
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
                <p className="text-sm text-gray-500 mt-2">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
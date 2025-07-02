'use client';
import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const AboutUsSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with Link */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl tracking-[0.06rem] md:text-3xl font-bold text-gray-900">
              About Us
            </h2>
            <div className="w-16 h-1 bg-blue-600 mt-3"></div>
          </div>
          <Link
            href="/about"
            className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <span className="text-sm font-medium">View Full Story</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Centered Content */}
        <div className="flex justify-center">
          <div className="max-w-3xl space-y-6">
            <p className="text-gray-600 leading-relaxed text-center">
              It is our proud pleasure to present you our good designs with eye
              catching colour scheme. Dhruv Rugs International was established in 2020,
              and since then we've been crafting excellence in every thread.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6">
              {[
                "Hand Knots",
                "Natural Dyes",
                "Expert Weavers",
                "Premium Materials",
              ].map((feature) => (
                <div key={feature} className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quick Vision Statement */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700 italic tracking-[0.03rem] text-center">
                "Our organization believes in making new ways and creating new
                products, striving to provide the best quality and most
                competitive rates in the industry."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
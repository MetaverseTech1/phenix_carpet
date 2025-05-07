'use client';

import React from "react";
import { Award, Eye, Heart } from "lucide-react";
import PageBanner from "@/components/common/PageBanner";
import Image from "next/image";

const AboutPage = ({ teamMembers }) => {
  const sections = [
    {
      icon: <Eye className="w-12 h-12 text-blue-600" />,
      title: "Our Mission",
      content:
        "Our mission is to develop a secured community that grows with changing times and to deliver every customer the skill sets of each craftsman. We operate as an extended family and welcome each talent that showcases creativity, leadership and commitment. Every moment, we live a dream of each artisan and connect them to million hearts worldwide.",
    },
    {
      icon: <Award className="w-12 h-12 text-yellow-600" />,
      title: "Quality Policy",
      content:
        "We strive to enhance the customer satisfaction level, improve productivity and quality through continual improvement of quality management systems to manufacture and export the carpets, rugs and floor coverings.",
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: "Social Accountability",
      content:
        "The Phenix Carpet is equally passionate about discharging its social obligations as it is about retaining its position in the world market as a leading manufacturer and exporter of woolen, silk, viscose and cotton carpets from India. The company is committed to contributing to various social causes.",
    },
  ];

  const countries = [
    {
      name: "GERMANY",
      code: "DE",
      img: "/images/Flag_of_Germany.svg.png",
    },
    {
      name: "U.A.E",
      code: "AE",
      img: "/images/Flag_of_the_United_Arab_Emirates.svg-1.png",
    },
    {
      name: "U.S.A",
      code: "US",
      img: "/images/2560px-Flag_of_the_United_States.svg.png",
    },
    {
      name: "U.K",
      code: "GB",
      img: "/images/Flag_of_the_United_Kingdom-300x240.png",
    },
    {
      name: "AUSTRALIA",
      code: "AU",
      img: "/images/1280px-Flag_of_Australia.svg.png",
    },
    {
      name: "JAPAN",
      code: "JP",
      img: "/images/Flag_of_Japan_with_border-300x240.png",
    },
    {
      name: "ITALY",
      code: "IY",
      img: "https://media.istockphoto.com/id/1217765776/photo/flag-of-italy-blowing-in-the-wind.jpg?s=612x612&w=0&k=20&c=Nwe1XWUnwkFsvuGulSzq4gG_wM0LtZ5EO--M5UEQP_A=",
    },
    {
      name: "NETHERLANDS",
      code: "ND",
      img: "https://media.istockphoto.com/id/1007857974/vector/netherlands-round-flag-vector-flat-icon.jpg?s=612x612&w=0&k=20&c=X_4zYpFnqTaMWQg58p-CpMMTwc5c7RpQTZkif6Yt0HE=",
    },
  ];
  
  return (
    <div className="bg-white">
      <PageBanner
        title="About Us"
        subtitle="Crafting Excellence Since 1996"
        backgroundImage="url('/images/001_1.jpg')"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />

      <div className="container mx-auto px-4 max-w-7xl py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              It is our proud pleasure to present you our good designs with eye
              catching colour scheme. THE PHENIX CARPET was established in 1996,
              and since then we've been crafting excellence in every thread.
            </p>

            <div className="grid grid-cols-2 gap-4 py-6">
              {[
                "Hand Knots",
                "Natural Dyes",
                "Expert Weavers",
                "Premium Materials",
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Quick Vision Statement */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-700 italic tracking-[0.03rem]">
                "Our organization believes in making new ways and creating new
                products, striving to provide the best quality and most
                competitive rates in the industry."
              </p>
            </div>
          </div>

          {/* Right Column - Leadership */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-md bg-white relative h-80 w-full">
              <Image
                src="/images/about-us.jpg"
                alt="Leadership"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-gray-200"></div>
            <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-gray-200"></div>
          </div>
        </div>

        {/* Mission and Values */}
        <div className="grid md:grid-cols-2 gap-12 mt-[5rem] mb-20">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Expertise
            </h3>
            <p className="text-gray-700 mb-4">
              THE PHENIX CARPET is running by Mr. Pawan Maurya with Mrs. Babita
              Maurya. We are second generation of manufacturer and exporter of
              Hand knots, Handloom & Hand tufted and Woolen Carpets in India.
              We specialized in natural dyes carpets. We get our carpets weaved
              by expert weavers. We always use qualitative raw materials
              including good wool, viscose, silk etc.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Vision
            </h3>
            <p className="text-gray-700 mb-4">
              Our organization believes in making new ways and creating new
              products. We have always strived to provide the best product
              possible and most competitive rates in the industry. Our company
              is moving towards the advancement in the path of prosper- ity,
              making an indelible mark in the industry by the virtue of its
              optimum quality products, which have a vivid and striking
              potential.
            </p>
          </div>
        </div>

        {/* Business Objectives */}
        <div className="mb-20">
          <div className="bg-blue-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Our Core Objectives
            </h3>
            <p className="text-gray-700 text-center mb-8">
              THE PHENIX CARPET built its business on 3 primary objectives –
              Innovation, quality selection & prompt service.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {["Innovation", "Quality Selection", "Prompt Service"].map(
                (objective) => (
                  <div
                    key={objective}
                    className="bg-white p-6 rounded-xl text-center"
                  >
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {objective}
                    </h4>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Market Presence */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              We pride ourselves on supplying independent home furnishing
              retailers, chain stores & internet vendors throughout the US,
              Canada, Europe Japan & Australia. THE PHENIX CARPET range of
              offerings consists of the highest quality rugs. Over our history,
              we've strived to provide customers with the best experience and
              most current fashion.
            </p>
            <p className="text-lg text-gray-700">
              Last but not least, we always endeavor to develop co-operative
              relationships with our valued customers.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-50 text-blue-600">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {section.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="text-center mb-8">
          <div className="py-5">
            <h2 className="text-3xl tracking-[0.05rem] font-bold mb-3 text-gray-800">
              Our Clients
            </h2>
            <p className="text-xl text-gray-800 tracking-[0.04rem] pb-6">
              We provide quality carpets to countries like
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-5 py-8">
            {countries.map((country) => (
              <div key={country.code} className="flex flex-col items-center">
                <div className="mb-3 rounded overflow-hidden shadow-sm relative w-16 h-12">
                  <Image
                    src={`${country.img}`}
                    alt={`${country.name} flag`}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-semibold text-sm text-gray-700">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
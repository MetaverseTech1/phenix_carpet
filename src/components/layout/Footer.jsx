"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegramPlane, FaPinterestP, FaYoutube, FaLine } from "react-icons/fa";
import { useRouter } from "next/navigation"; // App Router navigation

const Footer = () => {
  const router = useRouter(); // Next.js App Router

  const menu = [
    "HAND KNOTTED",
    "HAND LOOM",
    "HAND TUFTED",
    "FLAT WEAVE",
    "JUTE",
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-8xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-[3.7rem]">
          {/* Company Info Section */}
          <div className="space-y-4 flex justify-center flex-col">
            <Image
              src="/images/LOGO3210.jpg"
              alt="Dhruv Rugs International"
              width={200}
              height={64}
              className="object-contain h-16"
            />
            <p className="text-slate-300 text-sm tracking-[0.04rem] mt-4">
              Expert weavers creating quality carpets using the finest materials
              including wool, viscose, and silk.
            </p>

            <div className="flex justify-center space-x-4 mt-6">
              <a
                href="https://www.facebook.com/share/1AhLf6C2Ej"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/dhruvrugs?t=KhyBPUUQ0cP4QsjbUkjEXQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <RiTwitterXFill size={20} />
              </a>
              <a
                href="https://www.instagram.com/dhruvrugs?igsh=MWE2YTJpMjNoY2NqdA=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/dhruvrugs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="http://t.me/dhruvrugs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <FaTelegramPlane size={20} />
              </a>
              <a
                href="https://pin.it/7zbL7wGdN"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <FaPinterestP size={20} />
              </a>
              <a
                href="https://youtube.com/@dhruvrugs?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://line.me/ti/p/TG9bKKy3eR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors"
              >
                <FaLine size={20} />
              </a>
              <a
                href="https://maps.app.goo.gl/KTLSwGFMT98LGwXp9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm tracking-[0.04rem]">
              {menu.map((item) => (
                <li key={item}>
                  <Link
                    href={`/products/${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-slate-300 capitalize hover:text-white transition-colors hover:translate-x-1 inline-block transform"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm tracking-[0.04rem] text-slate-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-start">
                  Gaderiyapur, Mondh, Bhadohi, Uttar Pradesh, India 221406
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:info@dhruvrugs.global"
                  className="hover:text-white transition-colors"
                >
                  info@dhruvrugs.global
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <a
                  href="tel:+918318600961"
                  className="hover:text-white transition-colors"
                >
                  +91 8318600961
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="space-y-4 tracking-[0.04rem] text-sm">
              <p className="text-slate-300">
                Stay updated with our latest products and news
              </p>
              <form className="flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-slate-800 text-white rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-white text-black px-4 py-2 rounded-r hover:bg-blue-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center space-y-4">
            <p className="text-sm text-slate-400">
              Copyright © {new Date().getFullYear()} Dhruv Rugs International, All
              Rights Reserved.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-4xl mx-auto">
              Dhruv Rugs International, India&apos;s Largest Manufacturer of Rugs/Carpets,
              Woolen Carpet Manufacturers, Hand Knotted Rugs Carpet Manufacturer
              and Exporter in India, Indoor Carpet Manufacturers, Carpet
              Manufacturers in India, Outdoor Carpet Manufacturers, Carpet
              Manufacturer India, India&apos;s Largest Manufacturer of Hand Knotted
              Rugs, Silk Carpet Manufacturers and Exporter, Best Rugs Exporter
              India, Largest Rugs Manufacturer India, Flat weave Manufacturers
              and Exporter, Handmade Rugs from India, Handmade Rugs Exporter
              India, Largest Carpets Manufacturer India, Hand Knotted Rugs
              Manufacturer in India, Hand Knotted Carpet Manufacturer in India,
              Designer Carpet Manufacturers in India, Bhadohi Rugs Exporters,
              Bhadohi Carpets Exporters, Wool Silk Rugs Area Rugs India
              Supplier, Largest Rugs Manufacturer, Rugs exporters in India, Rug
              exporters in India.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
'use client';

import React from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";

const InstagramWall = ({ collectionsInstagramWall }) => {
  return (
    <div className="w-full max-w-8xl mx-auto px-4 pt-[8rem] pb-[10rem]">
      <h2 className="text-3xl tracking-[0.05rem] font-bold text-center mb-12">INSTAGRAM WALL</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
        {collectionsInstagramWall.map((collection) => (
          <div key={collection.id} className="group relative">
            {/* Images Stack */}
            <div className="relative h-72 transition-all duration-500">
              <div
                className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110 cursor-pointer"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={collection.image}
                    alt={`${collection.title}`}
                    fill
                    className="object-cover rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Instagram Icon Overlay */}
            <a
              href={collection.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
            </a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramWall;
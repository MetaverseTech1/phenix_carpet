import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSiteSection from '@/components/home/AboutSiteSection';
import AboutUsSection from '@/components/home/AboutUsSection';
import ProductCategory from '@/components/home/ProductCategory';
import ProductShowcase from '@/components/home/ProductShowcase';
import InstagramWall from '@/components/home/InstagramWall';
import { slides } from '../lib/data';
import { categories } from '../lib/data';
import { collectionsInstagramWall } from '../lib/data';

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <HeroSection slides={slides} />

      {/* about site section */}
      <AboutSiteSection />

      {/* about us section */}
      <AboutUsSection />

      {/* product category */}
      <ProductCategory categories={categories} />

      {/* product showcase */}
      <ProductShowcase />

      {/* instagram wall */}
      <InstagramWall collectionsInstagramWall={collectionsInstagramWall} />
    </div>
  );
}
import React, { useEffect, createElement } from 'react';
import { Header } from './components/Header';
import { ProductHero } from './components/ProductHero';
import { ValueProposition } from './components/ValueProposition';
import { KeyBenefits } from './components/KeyBenefits';
import { HowItWorks } from './components/HowItWorks';
import { ProductDetails } from './components/ProductDetails';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { SpecialOffer } from './components/SpecialOffer';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
export function App() {
  // Set the page title and favicon when the component mounts
  useEffect(() => {
    document.title = 'Moonrise Natural';
    // Add favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = "/favicon.png";
    favicon.type = 'image/png';
    // Remove any existing favicons to prevent duplicates
    const existingFavicons = document.querySelectorAll('link[rel="icon"]');
    existingFavicons.forEach(el => el.remove());
    document.head.appendChild(favicon);
  }, []);
  return <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <ProductHero />
        <ValueProposition />
        <KeyBenefits />
        <HowItWorks />
        <ProductDetails />
        <CustomerTestimonials />
        <SpecialOffer />
        <FAQ />
      </main>
      <Footer />
    </div>;
}

import React from 'react';
import HeroSection from '@/components/HeroSection';
import HomeMetrics from '@/components/HomeMetrics';
import ProcessPreview from '@/components/ProcessPreview';
import FounderQuote from '@/components/FounderQuote';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalConnections from '@/components/GlobalConnections';

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HomeMetrics />
        <GlobalConnections />
        <ProcessPreview />
        <FounderQuote />
      </main>
      <Footer />
    </>
  );
};

export default Index;

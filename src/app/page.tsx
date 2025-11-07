'use client';
import React from 'react';
import Header from '../components/ui/Header';
import HeroSection from '../components/ui/HeroSection';
import AboutSection from '../components/ui/AboutSection';
import WhyJoinSection from '../components/ui/WhyJoinSection';
import InsightsSection from '../components/ui/InsightsSection';
import Footer from '../components/ui/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen font-inter overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyJoinSection />
      <InsightsSection />
      <Footer />
    </div>
  );
};
export default LandingPage;

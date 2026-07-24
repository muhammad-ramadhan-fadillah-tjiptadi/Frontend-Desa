import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProfileSection } from '../components/ProfileSection';
import { OfficialsSection } from '../components/OfficialsSection';
import { DemographicsSection } from '../components/DemographicsSection';
import { NewsSection } from '../components/NewsSection';
import { UmkmSection } from '../components/UmkmSection';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ProfileSection />
      <OfficialsSection />
      <DemographicsSection />
      <NewsSection />
      <UmkmSection />
    </div>
  );
};

export default HomePage;
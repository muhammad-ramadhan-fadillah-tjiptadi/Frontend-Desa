import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProfileSection } from '../components/ProfileSection';
import { OfficialsSection } from '../components/OfficialsSection';
import { DemographicsSection } from '../components/DemographicsSection';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ProfileSection />
      <OfficialsSection />
      <DemographicsSection />
    </div>
  );
};

export default HomePage;

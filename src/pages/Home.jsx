import React from 'react';
import Hero from '../components/Hero.tsx';
import ClientsMarquee from '../components/ClientsMarquee.tsx';

import IntegrationsSection from '../components/IntegrationsSection.tsx';
import OurReach from '../components/OurReach.tsx';


import WhyChooseUs from '../components/Whychooseus.jsx';

import BootstrapTestimonialSection from '../components/Review.jsx';

import FullPageScrollSections from '../components/Scrollfade.jsx';
import CardsSlider from '../components/PriceSlider.jsx';
import SloganSection from '../components/SloganSection.jsx';
import Page2Effect from '../components/Page2.jsx';

const Home = () => {
  return (
    <div className="overflow-x-hidden" >
   
      <Hero />
      <ClientsMarquee />
      <FullPageScrollSections />


      <WhyChooseUs />
      <Page2Effect />

      <IntegrationsSection />
      <CardsSlider />
   




      <OurReach />
      <BootstrapTestimonialSection />

      <SloganSection />



    </div>
  );
};

export default Home;

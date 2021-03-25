import React from 'react';
import InfoSection from './InfoSection/InfoSection';
import FirstInfoSection from './FirstInfoSection/FirstInfoSection';
import Header from './Header/Header';
import ContactSection from './Contact/ContactSection';
import FeaturesSection from './Features/FeaturesSection';
import Testimonials from './Testimonials/Testimonials';

import Sections from '../api/data/Data';

function Home() {
  return (
    <>
      <Header {...Sections.header} />
      <FeaturesSection {...Sections.features} />
      <Testimonials {...Sections.section1} />
      <FirstInfoSection {...Sections.section1} />
      <InfoSection {...Sections.section2} />
      <ContactSection {...Sections.contact} />
    </>
  );
}

export default Home;

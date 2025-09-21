import React from 'react';
import TopSection from '../components/about us/TopSection';
import '../../public/styles/about_us.css'
import WhyChooseUs from '../components/about us/WhyChooseUs';
import Documents from '../components/about us/Documents';
import CoreValues from '../components/about us/CoreValues';
import Socials from '../components/about us/Socials';
import JoinUs from '../components/about us/JoinUs';
const AboutUs = () => {
 return (
  <div className='fa-lang page page--about-us'>
   <TopSection />
   <WhyChooseUs />
   <Documents/>
   <CoreValues/>
   <Socials/>
   <JoinUs/>
  </div>
 );
};

export default AboutUs;
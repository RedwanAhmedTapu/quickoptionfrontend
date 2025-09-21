import React from 'react';
import TopSection from '../components/about us/TopSection';
import '../../public/styles/about_us.css'
import WhyChooseUs from '../components/about us/WhyChooseUs';
const AboutUs = () => {
 return (
  <div className='fa-lang page page--about-us'>
   <TopSection />
   <WhyChooseUs />
   
  </div>
 );
};

export default AboutUs;
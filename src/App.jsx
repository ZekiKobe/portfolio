import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import ContactMe from './components/ContactMe/ContactMe';
import Education from './components/Education/Education';
import Footer from './components/Footer/footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/projects';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/workExperience';
import TestimonialCarousel from './components/Testimonial/TestimonialCarousel';
import ScrollToTop from './components/Scroller/ScrollTop';
import AboutMe from './components/AboutMe/aboutMe';
import Services from './components/Services/Service';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,    // Enable animations on scroll (not just once)
      easing: 'ease-out', // Easing function for smooth animation
    });

    // Refresh AOS on scroll to ensure animations trigger when scrolling both ways
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      // Clean up event listener when the component unmounts
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero data-aos="fade-up" data-aos-duration="1000"/>
        <AboutMe data-aos="fade-up" data-aos-duration="1000"/>
        <Education data-aos="fade-up" data-aos-duration="1000" />
        <Skills data-aos="fade-up" data-aos-duration="1000"/>
        <WorkExperience data-aos="fade-up" data-aos-duration="1000"/>
        <Projects data-aos="fade-up" data-aos-duration="1000"/>
        <Services data-aos="fade-up" data-aos-duration="1000"/>
        <TestimonialCarousel data-aos="fade-up" data-aos-duration="1000"/>
        <ContactMe data-aos="fade-up" data-aos-duration="1000"/>
      </div>
      <Footer data-aos="fade-up" data-aos-duration="1000"/>
      <ScrollToTop/>
    </>
  );
}

export default App;

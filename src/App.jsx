import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import ContactMe from "./components/ContactMe/ContactMe";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/projects";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/workExperience";
import TestimonialCarousel from "./components/Testimonial/TestimonialCarousel";
import ScrollToTop from "./components/Scroller/ScrollTop";
import AboutMe from "./components/AboutMe/aboutMe";
import Services from "./components/Services/Service";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });

    // Refresh AOS on scroll to ensure animations trigger when scrolling both ways
    window.addEventListener('scroll', AOS.refresh);

    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <Navbar />
      <main className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-20 pb-10 space-y-16 md:space-y-20 lg:space-y-24">
        <Hero data-aos="fade-up" />
        <AboutMe data-aos="fade-up" />
        <Education data-aos="fade-up" />
        <Skills data-aos="fade-up" />
        <WorkExperience data-aos="fade-up" />
        <Projects data-aos="fade-up" />
        <Services data-aos="fade-up" />
        <TestimonialCarousel data-aos="fade-up" />
        <ContactMe data-aos="fade-up" />
      </main>
      <Footer data-aos="fade-up" />
      <ScrollToTop />
    </div>
  );
}

export default App;

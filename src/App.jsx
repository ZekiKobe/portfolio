import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";
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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });

    // Refresh AOS on scroll to ensure animations trigger when scrolling both ways
    window.addEventListener("scroll", AOS.refresh);

    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1400);

    return () => {
      window.removeEventListener("scroll", AOS.refresh);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden">
      {showSplash && (
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-slate-950">
          <div className="relative flex items-center justify-center">
            <div className="splash-progress-ring" />
            <div className="h-28 w-28 rounded-full border border-slate-700/70 bg-slate-900/80 shadow-lg shadow-slate-950/80 flex items-center justify-center">
              <div className="flex items-center gap-3 text-accent text-3xl">
                <FaGraduationCap className="animate-bounce" />
                <FaCode className="animate-pulse" />
                <FaLaptopCode className="animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      )}

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

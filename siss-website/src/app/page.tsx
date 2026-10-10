'use client';

import { useEffect } from 'react';
import Loader from '@/components/Loader';
import WelcomeModal from '@/components/WelcomeModal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import Training from '@/components/Training';
import WhyChooseUs from '@/components/WhyChooseUs';
import BookingForm from '@/components/BookingForm';
import CareersForm from '@/components/CareersForm';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function Home() {
  useEffect(() => {
    // Scroll reveal observer for elements with .reveal, .reveal-left, .reveal-right, .reveal-scale
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const targets = document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );
    targets.forEach((el) => observer.observe(el));

    return () => {
      targets.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* 1. Full-screen Loading Animation */}
      <Loader />

      {/* 2. Welcome Pop-Up Modal */}
      <WelcomeModal />

      {/* Navigation Header */}
      <Navbar />

      <main id="main-content">
        {/* 3. Hero Slider & Trust Bar */}
        <Hero />
        <TrustBar />

        {/* 4. Sections in exact requested order */}
        {/* a) About Us with animated stat counters */}
        <About />

        {/* b) Our Services with category tabs & booking pre-selection */}
        <Services />

        {/* c) Industries We Serve */}
        <Industries />

        {/* d) 6-step Process Timeline */}
        <Process />

        {/* e) Training & Quality */}
        <Training />

        {/* f) Why Choose SISS */}
        <WhyChooseUs />

        {/* g) Book a Service Form */}
        <BookingForm />

        {/* h) Careers / Join Us Form */}
        <CareersForm />

        {/* i) Testimonials Carousel */}
        <Testimonials />

        {/* j) FAQ Accordion */}
        <Faq />

        {/* k) Contact with Google Map */}
        <Contact />
      </main>

      {/* l) Footer */}
      <Footer />

      {/* 7. Floating WhatsApp, Call, Back-to-top & Mobile Bottom Bar */}
      <FloatingElements />
    </>
  );
}

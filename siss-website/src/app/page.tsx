'use client';

import { useEffect } from 'react';
import Loader from '@/components/Loader';
import WelcomeModal from '@/components/WelcomeModal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import BookingForm from '@/components/BookingForm';
import About from '@/components/About';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import Training from '@/components/Training';
import WhyChooseUs from '@/components/WhyChooseUs';
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

        {/* ★ Booking / Query Form moved to top for better conversions */}
        <BookingForm />

        {/* About Us with animated stat counters */}
        <About />

        {/* Our Services with category tabs & booking pre-selection */}
        <Services />

        {/* Industries We Serve */}
        <Industries />

        {/* 6-step Process Timeline */}
        <Process />

        {/* Training & Quality */}
        <Training />

        {/* Why Choose SISS */}
        <WhyChooseUs />

        {/* Careers / Join Us Form */}
        <CareersForm />

        {/* Testimonials Carousel */}
        <Testimonials />

        {/* FAQ Accordion */}
        <Faq />

        {/* Contact with Google Map */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp, Call, Back-to-top & Mobile Bottom Bar */}
      <FloatingElements />
    </>
  );
}

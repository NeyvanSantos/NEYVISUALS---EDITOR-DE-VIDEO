import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';

import SkillsTicker from '@/components/SkillsTicker';
import ClientsMarquee from '@/components/ClientsMarquee';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <GrainOverlay />
      <Navigation />

      <main>
        <Hero />
        <Stats />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Portfolio />
        </ScrollReveal>
        <SkillsTicker />

        <ScrollReveal>
          <ClientsMarquee />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </>
  );
}

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Services from './Services';
import Testimonials from './Testimonials';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

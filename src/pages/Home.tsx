import Hero from '../components/Hero';
import Services from '../components/Services';
import History from '../components/History';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <History />
      <Reviews />
      <Contact />
    </main>
  );
}


import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Entertainment } from './components/Entertainment';
import { Offers } from './components/Offers';
import { Testimonials } from './components/Testimonials';
import { LuxuryStay } from './components/LuxuryStay';
import { Gallery } from './components/Gallery';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans text-navy-deep bg-sand min-h-screen selection:bg-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Entertainment />
        <Offers />
        <Testimonials />
        <LuxuryStay />
        <Gallery />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App;
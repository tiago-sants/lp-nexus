import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Promises from './components/Promises';
import Authority from './components/Authority';
import Testimonials from './components/Testimonials';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <PainPoints />
        <HowItWorks />
        <Services />
        <Promises />
        <Authority />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;

import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import About from './components/about/About';
import ProductCatalog from './components/products/ProductCatalog';
import Contact from './components/contact/Contact';
import Location from './components/contact/Location';
import Footer from './components/layout/Footer';
import WhatsAppFab from './components/ui/WhatsAppFab';
import FloatingBackgroundLogo from './components/ui/FloatingBackgroundLogo';

export default function App() {
  useEffect(() => {
    // SEO setup
    document.title = "Pharmaceutical Products in Uganda | Planet Pharmaceuticals";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Planet Pharmaceuticals Ltd - Leading supply and distribution of high-quality medicines, hospital drugs, and medical services in Kampala, Uganda.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Planet Pharmaceuticals Ltd - Leading supply and distribution of high-quality medicines, hospital drugs, and medical services in Kampala, Uganda.';
      document.head.appendChild(meta);
    }

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'pharmaceutical suppliers in Uganda, medicine distributors Kampala, hospital drug suppliers Africa, medical supply Kampala, pharmacy supply Uganda';
    document.head.appendChild(metaKeywords);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-medical-100 selection:text-medical-900 relative">
      <FloatingBackgroundLogo />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProductCatalog />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

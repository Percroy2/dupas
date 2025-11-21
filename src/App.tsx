import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import Offers from './pages/Offers';
import News from './pages/News';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offres" element={<Offers />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/politique-cookies" element={<CookiePolicy />} />
            <Route path="/conditions-generales" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
        <CookieConsent />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;


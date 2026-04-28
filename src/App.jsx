import Navbar from './components/landing/Navbar.jsx';
import HeroSection from './components/landing/HeroSection.jsx';
import ProblemSection from './components/landing/ProblemSection.jsx';
import SolutionSection from './components/landing/SolutionSection.jsx';
import ProofSection from './components/landing/ProofSection.jsx';
import CTASection from './components/landing/CTASection.jsx';
import Footer from './components/landing/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProofSection />
        <CTASection spots={7} />
      </main>
      <Footer />
    </div>
  );
}

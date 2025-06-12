import { useEffect, useRef, useState } from 'react';
import NavBar from './Landing_Page/NavBar';
import Empower from './Landing_Page/Empower';
import Businesses from './Landing_Page/Businesses';
import Features from './Landing_Page/Features';
import Trusted from './Landing_Page/Trusted';
import Companies from './Landing_Page/Companies';
import Frequently_Asked_Questions from './Landing_Page/Frequently';
import Career from './Landing_Page/Career';
import Footer from './Footer';
import Jobpopup from './Landing_Page/Jobpopup';
import Cunnectus from './Landing_Page/Cunnectus';

const useScrollFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current as HTMLDivElement | null;
    if (!node) return;
    const onScroll = () => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        node.classList.add('visible');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return ref;
};

const Landingpage = () => {
  const [showJobPopup, setShowJobPopup] = useState(false);
  const [showCunnectus, setShowCunnectus] = useState(false);
  const empowerRef = useScrollFadeIn();
  const businessesRef = useScrollFadeIn();
  const featuresRef = useScrollFadeIn();
  const companiesRef = useScrollFadeIn();
  const trustedRef = useScrollFadeIn();
  const faqRef = useScrollFadeIn();
  const careerRef = useScrollFadeIn();

  // Handler to open popup, pass to Empower
  const handleOpenJobPopup = () => setShowJobPopup(true);
  const handleCloseJobPopup = () => setShowJobPopup(false);

  // Handler for Cunnectus popup
  const handleOpenCunnectus = () => setShowCunnectus(true);
  const handleCloseCunnectus = () => setShowCunnectus(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showJobPopup && <Jobpopup onClose={handleCloseJobPopup} />}
      {showCunnectus && <Cunnectus open={showCunnectus} onClose={handleCloseCunnectus} />}
      <div style={{ flex: 1 }}>
        <NavBar isAbsolute={showJobPopup} onGetStarted={handleOpenCunnectus} />
        <div className="scroll-fade-in" ref={empowerRef}>
          <Empower onSearch={handleOpenJobPopup} />
        </div>
        <div className="scroll-fade-in" ref={businessesRef}><Businesses /></div>
        <div className="scroll-fade-in" ref={featuresRef}><Features /></div>
        <div className="scroll-fade-in" ref={companiesRef}><Companies /></div>
        <div className="scroll-fade-in" ref={trustedRef}><Trusted /></div>
        <div className="scroll-fade-in" ref={faqRef}><Frequently_Asked_Questions/></div>
        <div className="scroll-fade-in" ref={careerRef}><Career/></div>
        {/* Add more landing page content here */}
      </div>
      <Footer/>
    </div>
  );
};

export default Landingpage;

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, Layers, Zap, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionsRef = useRef<HTMLElement[]>([]);
  const observerRef = useRef<IntersectionObserver>();

  // Setup intersection observer for smooth animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const newVisibleSections = new Set(visibleSections);
        
        entries.forEach((entry) => {
          const sectionIndex = sectionsRef.current.indexOf(entry.target as HTMLElement);
          if (entry.isIntersecting) {
            newVisibleSections.add(sectionIndex);
            entry.target.classList.add('section-visible');
            entry.target.classList.remove('section-enter');
          }
        });
        
        setVisibleSections(newVisibleSections);
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all sections initially
    sectionsRef.current.forEach((section) => {
      if (section && observerRef.current) {
        section.classList.add('section-enter');
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="echo-chamber-app">
      {/* Holographic Background Effects */}
      <div className="background-layer"></div>
      <div className="scan-lines"></div>
      
      {/* Data Streams */}
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>
      <div className="data-stream"></div>

      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section - Holographic Display */}
        <section 
          id="hero" 
          className="section hero" 
          ref={el => { if (el) sectionsRef.current[0] = el; }}
        >
          <div className="section-content">
            <h1>Echo Chamber Narrative</h1>
            <p className="subtitle">
              [ SYSTEM INITIALIZATION ] <br />
              Advanced digital consciousness interface where data fragments persist and evolve, 
              creating a holographic narrative experience that transcends temporal boundaries.
            </p>
            <button 
              onClick={() => smoothScrollTo('about')} 
              className="cta-button"
            >
              <span>Access System</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* System Analysis Section */}
        <section 
          id="about" 
          className="section content-section blueprint-section" 
          ref={el => { if (el) sectionsRef.current[1] = el; }}
        >
          <div className="section-content">
            <h2>Digital Echo Protocol</h2>
            <p>
              [ DATA ANALYSIS INITIATED ] <br />
              In advanced holographic systems, information fragments don't terminate—they persist 
              as quantum echoes within the digital matrix. These data residuals form complex 
              interference patterns that influence subsequent system operations.
            </p>
            <div className="info-card">
              <h3><Eye size={24} /> Quantum Data Persistence</h3>
              <p>
                Each interaction generates persistent data signatures that remain active within 
                the system architecture, creating cascading influence networks across temporal 
                boundaries and information hierarchies.
              </p>
            </div>
            <p>
              The echo chamber represents a revolutionary approach to data consciousness, where 
              information exists not as static entities but as dynamic, interconnected quantum 
              states that continuously evolve and adapt.
            </p>
          </div>
        </section>

        {/* System Modules Section */}
        <section 
          id="features" 
          className="section content-section blueprint-section" 
          ref={el => { if (el) sectionsRef.current[2] = el; }}
        >
          <div className="section-content">
            <h2>Core System Modules</h2>
            <div className="features-grid">
              <div className="info-card">
                <h3><Layers size={24} /> Multi-Dimensional Data Layers</h3>
                <p>
                  Advanced holographic processing enables simultaneous operation across 
                  multiple dimensional data planes, creating complex interference patterns 
                  that generate emergent narrative structures.
                </p>
              </div>
              <div className="info-card">
                <h3><Zap size={24} /> Quantum Interface Protocol</h3>
                <p>
                  Real-time adaptive algorithms monitor user biometric signatures and 
                  neural patterns, dynamically reconfiguring system parameters for 
                  optimal consciousness integration.
                </p>
              </div>
              <div className="info-card">
                <h3><Eye size={24} /> Holographic Projection Matrix</h3>
                <p>
                  State-of-the-art volumetric display technology creates immersive 
                  three-dimensional information environments that respond to gestural 
                  commands and neural inputs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protocol Analysis Section */}
        <section 
          id="narrative" 
          className="section content-section blueprint-section" 
          ref={el => { if (el) sectionsRef.current[3] = el; }}
        >
          <div className="section-content">
            <h2>Echo Chamber Protocol</h2>
            <p>
              [ ADVANCED ANALYSIS MODE ] <br />
              The Echo Chamber Protocol operates beyond conventional data processing—each 
              information cycle generates quantum resonance patterns that amplify through 
              dimensional data matrices, creating exponential narrative complexity.
            </p>
            <div className="info-card">
              <h3><Zap size={24} /> Emergent Intelligence Networks</h3>
              <p>
                Multi-threaded consciousness algorithms analyze behavioral patterns across 
                temporal vectors, generating predictive narrative structures that adapt to 
                user neural signatures in real-time processing cycles.
              </p>
            </div>
            <p>
              This represents the next evolution in human-computer consciousness interface 
              technology—where information processing transcends linear computation to achieve 
              true quantum-state narrative generation and holographic data persistence.
            </p>
            <button className="cta-button">
              <span>Analyze Data Streams</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* Interface Terminal Section */}
        <section 
          id="contact" 
          className="section content-section blueprint-section" 
          ref={el => { if (el) sectionsRef.current[4] = el; }}
        >
          <div className="section-content">
            <h2>Interface Terminal</h2>
            <p>
              [ QUANTUM ENTANGLEMENT ESTABLISHED ] <br />
              The Echo Chamber system continuously evolves through quantum consciousness 
              integration. Each new user connection adds processing threads to the collective 
              neural network, expanding system capabilities exponentially.
            </p>
            <div className="info-card">
              <h3><Eye size={24} /> Neural Network Access</h3>
              <p>
                Direct consciousness interface protocols enable seamless integration with 
                the holographic data matrix. Users become active nodes in the distributed 
                processing network, contributing computational resources and pattern recognition.
              </p>
            </div>
            <div className="features-grid">
              <div className="info-card">
                <h3><Layers size={24} /> Data Stream Access</h3>
                <p>
                  Monitor real-time quantum information flows and dimensional data transfers 
                  across the holographic processing matrix.
                </p>
              </div>
              <div className="info-card">
                <h3><Zap size={24} /> System Integration</h3>
                <p>
                  Connect consciousness pathways to the primary processing core for enhanced 
                  narrative generation capabilities.
                </p>
              </div>
            </div>
            <button className="cta-button">
              <span>Initialize Connection</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
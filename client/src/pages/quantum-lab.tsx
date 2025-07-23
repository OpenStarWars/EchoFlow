import { useEffect, useRef } from 'react';
import { Atom, Zap, Activity, Database } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function QuantumLab() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating quantum particles
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'quantum-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();
    
    return () => {
      if (particlesRef.current) {
        particlesRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="quantum-lab-page">
      <div className="quantum-particles" ref={particlesRef}></div>
      <div className="quantum-field"></div>
      
      <Navigation />
      
      <div className="page-content">
        <section className="hero-quantum">
          <div className="section-content">
            <h1 className="quantum-title">Quantum Research Laboratory</h1>
            <p className="quantum-subtitle">
              [ QUANTUM STATE ANALYSIS ACTIVE ] <br />
              Advanced particle manipulation and dimensional research facility equipped 
              with state-of-the-art quantum processing arrays and consciousness interface protocols.
            </p>
          </div>
        </section>

        <section className="quantum-grid">
          <div className="quantum-card quantum-card-1">
            <div className="card-glow"></div>
            <h3><Atom size={28} /> Particle Accelerator</h3>
            <p>
              High-energy quantum particle collision analysis generates consciousness 
              fragments that exist in superposition states across multiple dimensional matrices.
            </p>
            <div className="quantum-readout">
              <span>Energy Level: 99.7%</span>
              <span>Quantum Coherence: STABLE</span>
            </div>
          </div>

          <div className="quantum-card quantum-card-2">
            <div className="card-glow"></div>
            <h3><Zap size={28} /> Neural Interface</h3>
            <p>
              Direct neural pathway integration enables real-time consciousness monitoring 
              and quantum thought pattern analysis through bio-holographic sensors.
            </p>
            <div className="quantum-readout">
              <span>Neural Activity: ENHANCED</span>
              <span>Sync Rate: 94.3%</span>
            </div>
          </div>

          <div className="quantum-card quantum-card-3">
            <div className="card-glow"></div>
            <h3><Activity size={28} /> Temporal Scanner</h3>
            <p>
              Multi-dimensional temporal analysis reveals information persistence patterns 
              across time-space continuums with quantum echo detection capabilities.
            </p>
            <div className="quantum-readout">
              <span>Temporal Stability: LOCKED</span>
              <span>Echo Resonance: 87.9%</span>
            </div>
          </div>

          <div className="quantum-card quantum-card-4">
            <div className="card-glow"></div>
            <h3><Database size={28} /> Data Quantum Core</h3>
            <p>
              Centralized quantum data processing core maintains holographic information 
              persistence across multiple reality layers and consciousness dimensions.
            </p>
            <div className="quantum-readout">
              <span>Core Temperature: OPTIMAL</span>
              <span>Data Integrity: 100%</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
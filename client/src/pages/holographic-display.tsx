import { useEffect, useRef } from 'react';
import { Monitor, Layers3, Scan, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function HolographicDisplay() {
  const hologramsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating holographic projections
    const createHolograms = () => {
      if (!hologramsRef.current) return;
      
      for (let i = 0; i < 8; i++) {
        const hologram = document.createElement('div');
        hologram.className = 'floating-hologram';
        hologram.style.left = Math.random() * 100 + '%';
        hologram.style.top = Math.random() * 100 + '%';
        hologram.style.animationDelay = Math.random() * 4 + 's';
        hologram.style.animationDuration = (Math.random() * 6 + 4) + 's';
        hologramsRef.current.appendChild(hologram);
      }
    };

    createHolograms();
    
    return () => {
      if (hologramsRef.current) {
        hologramsRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="holographic-display-page">
      <div className="floating-holograms" ref={hologramsRef}></div>
      <div className="holographic-interference"></div>
      
      <Navigation />
      
      <div className="page-content">
        <section className="hero-holo">
          <div className="section-content">
            <h1 className="holo-title">Volumetric Display Interface</h1>
            <p className="holo-subtitle">
              [ 3D PROJECTION SYSTEMS ONLINE ] <br />
              Advanced holographic display technology renders three-dimensional information 
              spaces with gesture recognition and neural command integration.
            </p>
          </div>
        </section>

        <section className="holo-displays">
          <div className="holo-card holo-card-monitor">
            <div className="holo-frame"></div>
            <div className="holo-content">
              <h3><Monitor size={28} /> Primary Display Matrix</h3>
              <p>
                Ultra-high resolution volumetric display projects information directly 
                into three-dimensional space with crystal-clear holographic clarity.
              </p>
              <div className="holo-metrics">
                <div className="metric">
                  <span className="label">Resolution</span>
                  <span className="value">8K x 4K x 2K</span>
                </div>
                <div className="metric">
                  <span className="label">Refresh Rate</span>
                  <span className="value">240 Hz</span>
                </div>
                <div className="metric">
                  <span className="label">Color Depth</span>
                  <span className="value">32-bit HDR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="holo-card holo-card-layers">
            <div className="holo-frame"></div>
            <div className="holo-content">
              <h3><Layers3 size={28} /> Dimensional Layers</h3>
              <p>
                Multi-layer projection system creates depth and perspective through 
                advanced light field manipulation and photonic interference patterns.
              </p>
              <div className="holo-metrics">
                <div className="metric">
                  <span className="label">Active Layers</span>
                  <span className="value">12</span>
                </div>
                <div className="metric">
                  <span className="label">Depth Range</span>
                  <span className="value">2.5 meters</span>
                </div>
                <div className="metric">
                  <span className="label">Parallax Zones</span>
                  <span className="value">360°</span>
                </div>
              </div>
            </div>
          </div>

          <div className="holo-card holo-card-scan">
            <div className="holo-frame"></div>
            <div className="holo-content">
              <h3><Scan size={28} /> Gesture Recognition</h3>
              <p>
                Advanced motion tracking sensors detect hand movements and gestures 
                for intuitive manipulation of holographic interface elements.
              </p>
              <div className="holo-metrics">
                <div className="metric">
                  <span className="label">Tracking Points</span>
                  <span className="value">21 per hand</span>
                </div>
                <div className="metric">
                  <span className="label">Response Time</span>
                  <span className="value">&lt; 1ms</span>
                </div>
                <div className="metric">
                  <span className="label">Accuracy</span>
                  <span className="value">99.8%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="holo-card holo-card-eye">
            <div className="holo-frame"></div>
            <div className="holo-content">
              <h3><Eye size={28} /> Neural Interface</h3>
              <p>
                Direct neural pathway integration enables thought-based navigation 
                and control of holographic information displays.
              </p>
              <div className="holo-metrics">
                <div className="metric">
                  <span className="label">Neural Channels</span>
                  <span className="value">2048</span>
                </div>
                <div className="metric">
                  <span className="label">Thought Recognition</span>
                  <span className="value">94.7%</span>
                </div>
                <div className="metric">
                  <span className="label">Command Latency</span>
                  <span className="value">0.3ms</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
import { useEffect, useRef } from 'react';
import { Database, Server, HardDrive, Wifi } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function DataStreams() {
  const streamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create flowing data streams
    const createDataFlows = () => {
      if (!streamsRef.current) return;
      
      for (let i = 0; i < 25; i++) {
        const stream = document.createElement('div');
        stream.className = 'data-flow';
        stream.style.left = Math.random() * 100 + '%';
        stream.style.animationDelay = Math.random() * 2 + 's';
        stream.style.animationDuration = (Math.random() * 4 + 3) + 's';
        stream.innerHTML = Math.random() > 0.5 ? '1' : '0';
        streamsRef.current.appendChild(stream);
      }
    };

    createDataFlows();
    
    return () => {
      if (streamsRef.current) {
        streamsRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="data-streams-page">
      <div className="data-flows" ref={streamsRef}></div>
      <div className="data-matrix"></div>
      
      <Navigation />
      
      <div className="page-content">
        <section className="hero-data">
          <div className="section-content">
            <h1 className="data-title">Information Processing Streams</h1>
            <p className="data-subtitle">
              [ DATA TRANSMISSION PROTOCOLS ACTIVE ] <br />
              Real-time information processing through quantum data channels with 
              multi-dimensional bandwidth and consciousness-integrated data flows.
            </p>
          </div>
        </section>

        <section className="data-centers">
          <div className="data-card data-card-database">
            <div className="data-flow-lines"></div>
            <div className="data-header">
              <Database size={36} />
              <h3>Quantum Storage Matrix</h3>
            </div>
            <p>
              Distributed quantum storage systems maintain data persistence across 
              multiple dimensional planes with zero-latency access protocols.
            </p>
            <div className="data-flow-indicators">
              <div className="flow-indicator">
                <span className="flow-label">Input Stream</span>
                <div className="flow-bar">
                  <div className="flow-progress flow-input"></div>
                </div>
                <span className="flow-rate">847.3 TB/s</span>
              </div>
              <div className="flow-indicator">
                <span className="flow-label">Processing</span>
                <div className="flow-bar">
                  <div className="flow-progress flow-process"></div>
                </div>
                <span className="flow-rate">632.1 TB/s</span>
              </div>
            </div>
          </div>

          <div className="data-card data-card-server">
            <div className="data-flow-lines"></div>
            <div className="data-header">
              <Server size={36} />
              <h3>Processing Node Cluster</h3>
            </div>
            <p>
              High-performance processing nodes handle parallel data computation 
              across distributed consciousness networks with adaptive load balancing.
            </p>
            <div className="data-flow-indicators">
              <div className="flow-indicator">
                <span className="flow-label">CPU Utilization</span>
                <div className="flow-bar">
                  <div className="flow-progress flow-cpu"></div>
                </div>
                <span className="flow-rate">94.7%</span>
              </div>
              <div className="flow-indicator">
                <span className="flow-label">Memory Usage</span>
                <div className="flow-bar">
                  <div className="flow-progress flow-memory"></div>
                </div>
                <span className="flow-rate">78.3%</span>
              </div>
            </div>
          </div>

          <div className="data-card data-card-storage">
            <div className="data-flow-lines"></div>
            <div className="data-header">
              <HardDrive size={36} />
              <h3>Holographic Archives</h3>
            </div>
            <p>
              Advanced holographic storage technology preserves information in 
              three-dimensional data structures with quantum error correction.
            </p>
            <div className="data-flow-indicators">
              <div className="flow-indicator">
                <span className="flow-label">Archive Integrity</span>
                <div className="flow-bar">
                  <div className="flow-progress flow-integrity"></div>
                </div>
                <span className="flow-rate">99.99%</span>
              </div>
              <div className="flow-indicator">
                <span className="flow-label">Access Speed</span>
                <div className="flow-bar">
                  <div className="flow-progress flow-speed"></div>
                </div>
                <span className="flow-rate">0.001ms</span>
              </div>
            </div>
          </div>

          <div className="data-card data-card-network">
            <div className="data-flow-lines"></div>
            <div className="data-header">
              <Wifi size={36} />
              <h3>Neural Data Links</h3>
            </div>
            <p>
              Quantum entangled communication channels enable instantaneous data 
              transfer across dimensional boundaries and consciousness interfaces.
            </p>
            <div className="data-flow-indicators">
              <div className="flow-indicator">
                <span className="flow-label">Link Quality</span>
                <div className="flow-bar">
                  <div className="flow-progress flow-quality"></div>
                </div>
                <span className="flow-rate">100%</span>
              </div>
              <div className="flow-indicator">
                <span className="flow-label">Bandwidth</span>
                <div className="flow-bar">
                  <div className="flow-progress flow-bandwidth"></div>
                </div>
                <span className="flow-rate">∞ PB/s</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
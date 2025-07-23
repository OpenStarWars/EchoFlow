import { useEffect, useRef } from 'react';
import { Brain, Network, Cpu, Layers } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function NeuralNetwork() {
  const networkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create neural network connections
    const createConnections = () => {
      if (!networkRef.current) return;
      
      for (let i = 0; i < 15; i++) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        connection.style.left = Math.random() * 100 + '%';
        connection.style.top = Math.random() * 100 + '%';
        connection.style.animationDelay = Math.random() * 3 + 's';
        networkRef.current.appendChild(connection);
      }
    };

    createConnections();
    
    return () => {
      if (networkRef.current) {
        networkRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="neural-network-page">
      <div className="neural-connections" ref={networkRef}></div>
      <div className="neural-grid-overlay"></div>
      
      <Navigation />
      
      <div className="page-content">
        <section className="hero-neural">
          <div className="section-content">
            <h1 className="neural-title">Neural Processing Matrix</h1>
            <p className="neural-subtitle">
              [ CONSCIOUSNESS INTERFACE ACTIVE ] <br />
              Advanced artificial intelligence processing center with multi-layered 
              neural pathways and synaptic pattern recognition algorithms.
            </p>
          </div>
        </section>

        <section className="neural-modules">
          <div className="neural-card neural-card-brain">
            <div className="neural-pulse"></div>
            <h3><Brain size={32} /> Cognitive Core</h3>
            <p>
              Primary consciousness processing unit handles complex thought pattern 
              analysis and decision-making algorithms through quantum neural networks.
            </p>
            <div className="neural-stats">
              <div className="stat-bar">
                <span>Processing Power</span>
                <div className="bar"><div className="fill fill-95"></div></div>
              </div>
              <div className="stat-bar">
                <span>Memory Allocation</span>
                <div className="bar"><div className="fill fill-87"></div></div>
              </div>
            </div>
          </div>

          <div className="neural-card neural-card-network">
            <div className="neural-pulse"></div>
            <h3><Network size={32} /> Synaptic Mesh</h3>
            <p>
              Interconnected neural pathways enable rapid information transfer and 
              pattern recognition across distributed processing nodes.
            </p>
            <div className="neural-stats">
              <div className="stat-bar">
                <span>Connection Density</span>
                <div className="bar"><div className="fill fill-92"></div></div>
              </div>
              <div className="stat-bar">
                <span>Signal Integrity</span>
                <div className="bar"><div className="fill fill-98"></div></div>
              </div>
            </div>
          </div>

          <div className="neural-card neural-card-cpu">
            <div className="neural-pulse"></div>
            <h3><Cpu size={32} /> Quantum Processor</h3>
            <p>
              Advanced quantum computing core performs parallel consciousness 
              calculations and reality simulation processing.
            </p>
            <div className="neural-stats">
              <div className="stat-bar">
                <span>Quantum Coherence</span>
                <div className="bar"><div className="fill fill-89"></div></div>
              </div>
              <div className="stat-bar">
                <span>Parallel Threads</span>
                <div className="bar"><div className="fill fill-100"></div></div>
              </div>
            </div>
          </div>

          <div className="neural-card neural-card-layers">
            <div className="neural-pulse"></div>
            <h3><Layers size={32} /> Deep Learning Stack</h3>
            <p>
              Multi-layered learning algorithms adapt and evolve through 
              consciousness feedback loops and pattern reinforcement.
            </p>
            <div className="neural-stats">
              <div className="stat-bar">
                <span>Learning Rate</span>
                <div className="bar"><div className="fill fill-94"></div></div>
              </div>
              <div className="stat-bar">
                <span>Pattern Recognition</span>
                <div className="bar"><div className="fill fill-96"></div></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
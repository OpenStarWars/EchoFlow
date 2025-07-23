import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, Layers, Zap, Eye } from 'lucide-react';

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
      {/* Subtle Background */}
      <div className="background-layer"></div>

      {/* Navigation - Always Visible */}
      <nav className="nav-container">
        <div className="nav-content">
          <div className="logo">Echo Chamber</div>
          <ul className="nav-links">
            <li><button onClick={() => smoothScrollTo('hero')}>Home</button></li>
            <li><button onClick={() => smoothScrollTo('about')}>About</button></li>
            <li><button onClick={() => smoothScrollTo('features')}>Features</button></li>
            <li><button onClick={() => smoothScrollTo('narrative')}>Narrative</button></li>
            <li><button onClick={() => smoothScrollTo('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section 
          id="hero" 
          className="section hero" 
          ref={el => { if (el) sectionsRef.current[0] = el; }}
        >
          <div className="section-content">
            <h1>Echo Chamber Narrative</h1>
            <p className="subtitle">
              Experience digital storytelling where past information subtly influences the present, 
              creating an immersive journey through interconnected thoughts and memories.
            </p>
            <button 
              onClick={() => smoothScrollTo('about')} 
              className="cta-button"
            >
              Explore the Echo <ArrowRight size={20} />
            </button>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          className="section content-section" 
          ref={el => { if (el) sectionsRef.current[1] = el; }}
        >
          <div className="section-content">
            <h2>The Digital Echo</h2>
            <p>
              In our connected world, information doesn't simply disappear—it leaves traces, creating 
              digital echoes that persist and influence future interactions. This narrative explores 
              how these fragments of data create new forms of meaning and understanding.
            </p>
            <p>
              Each interaction becomes part of a larger story, where boundaries between past and 
              present blur, forming a unique tapestry of digital consciousness that speaks to our 
              modern experience of information and memory.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section 
          id="features" 
          className="section content-section" 
          ref={el => { if (el) sectionsRef.current[2] = el; }}
        >
          <div className="section-content">
            <h2>Key Features</h2>
            <div className="features-grid">
              <div className="info-card">
                <h3><Layers size={24} /> Layered Narratives</h3>
                <p>
                  Multiple storylines interconnect and influence each other, creating depth 
                  and meaning that emerges from the relationships between different elements.
                </p>
              </div>
              <div className="info-card">
                <h3><Zap size={24} /> Dynamic Interactions</h3>
                <p>
                  Responsive design adapts to user engagement, providing personalized 
                  experiences that evolve based on interaction patterns and preferences.
                </p>
              </div>
              <div className="info-card">
                <h3><Eye size={24} /> Immersive Experience</h3>
                <p>
                  Carefully crafted visual and interactive elements create an atmospheric 
                  environment that draws users into the narrative journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section 
          id="narrative" 
          className="section content-section" 
          ref={el => { if (el) sectionsRef.current[3] = el; }}
        >
          <div className="section-content">
            <h2>The Narrative Experience</h2>
            <p>
              The echo chamber concept goes beyond simple repetition—it transforms information 
              through each iteration, adding layers of meaning and context that create something 
              entirely new from familiar elements.
            </p>
            <div className="info-card">
              <h3>Emergent Storytelling</h3>
              <p>
                Stories emerge not from single sources but from the intersection of multiple 
                narratives, creating rich, multifaceted experiences that reward exploration 
                and engagement.
              </p>
            </div>
            <p>
              This approach to digital narrative reflects how we actually process information 
              in our connected age—not as isolated facts, but as part of an ongoing conversation 
              between past experiences and present understanding.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="section content-section" 
          ref={el => { if (el) sectionsRef.current[4] = el; }}
        >
          <div className="section-content">
            <h2>Join the Conversation</h2>
            <p>
              The Echo Chamber Narrative continues to evolve with each visitor and interaction. 
              Your engagement adds new layers to this ongoing story, contributing to a collective 
              understanding of how information shapes consciousness.
            </p>
            <div className="info-card">
              <h3>Get Involved</h3>
              <p>
                Whether you're interested in digital storytelling, interactive media, or 
                exploring new forms of narrative, there are many ways to become part of 
                this evolving project.
              </p>
            </div>
            <button className="cta-button">
              Start Your Journey <ArrowRight size={20} />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
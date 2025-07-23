import { useEffect, useRef, useState } from 'react';

interface EchoElement {
  id: string;
  element: HTMLElement;
  timeout: NodeJS.Timeout;
}

interface TextEcho {
  id: string;
  element: HTMLElement;
  timeout: NodeJS.Timeout;
}

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const glitchTimeout = useRef<NodeJS.Timeout>();
  const echoElements = useRef<EchoElement[]>([]);
  const textEchoes = useRef<TextEcho[]>([]);
  
  const navigationRef = useRef<HTMLElement>(null);
  const glitchOverlayRef = useRef<HTMLDivElement>(null);
  const backgroundLayerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  // Handle scroll events with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.pageYOffset;
          const speed = Math.abs(currentScrollY - lastScrollY.current);
          
          setScrollSpeed(speed);
          setIsScrolling(true);
          
          // Update background animation
          updateBackgroundAnimation(speed);
          
          // Handle navigation visibility
          handleNavigation(currentScrollY);
          
          // Create echo effects
          createScrollEchoes(currentScrollY);
          
          // Handle section distortions
          handleSectionDistortions();
          
          // Update mirror elements
          updateMirrorElements();
          
          // Trigger glitch effects occasionally
          if (Math.random() < 0.1 && speed > 5) {
            triggerGlitchEffect();
          }
          
          lastScrollY.current = currentScrollY;
          
          // Clear scrolling state
          if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
          }
          scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
          }, 150);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Initialize particle animations and periodic effects
  useEffect(() => {
    // Initial glitch effect
    const initialGlitch = setTimeout(() => {
      triggerGlitchEffect();
    }, 1000);

    // Periodic glitch effects
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        triggerGlitchEffect();
      }
    }, 15000);

    // Particle generation
    const particleInterval = setInterval(() => {
      createFloatingParticles();
    }, 10000);

    return () => {
      clearTimeout(initialGlitch);
      clearInterval(glitchInterval);
      clearInterval(particleInterval);
    };
  }, []);

  // Mouse interaction effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      if (backgroundLayerRef.current) {
        const offsetX = (mouseX - 0.5) * 20;
        const offsetY = (mouseY - 0.5) * 20;
        backgroundLayerRef.current.style.transform += ` translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const updateBackgroundAnimation = (speed: number) => {
    if (backgroundLayerRef.current) {
      const intensity = Math.min(speed / 10, 2);
      backgroundLayerRef.current.style.transform = 
        `translate(${-20 + intensity * 5}px, ${-20 + intensity * 3}px) rotate(${2 + intensity}deg)`;
    }
  };

  const handleNavigation = (scrollY: number) => {
    if (scrollY > 100 && !navVisible) {
      setNavVisible(true);
    } else if (scrollY <= 100 && navVisible) {
      setNavVisible(false);
    }
  };

  const createScrollEchoes = (scrollY: number) => {
    sectionsRef.current.forEach((section, index) => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      
      // Create echo when section leaves viewport
      if (rect.bottom < 0 && !section.getAttribute('data-echo-created')) {
        createContentEcho(section);
        section.setAttribute('data-echo-created', 'true');
        
        // Create textual echo for next section
        if (index < sectionsRef.current.length - 1) {
          const nextSection = sectionsRef.current[index + 1];
          if (nextSection) {
            createTextualEcho(section, nextSection);
          }
        }
      }
      
      // Remove echo flag when section comes back
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.removeAttribute('data-echo-created');
      }
    });
  };

  const createContentEcho = (sourceSection: HTMLElement) => {
    const echo = sourceSection.cloneNode(true) as HTMLElement;
    const echoId = Math.random().toString(36).substr(2, 9);
    
    echo.classList.add('echo-element', 'echo-active');
    echo.style.position = 'fixed';
    echo.style.top = '50%';
    echo.style.left = '50%';
    echo.style.transform = 'translate(-50%, -50%)';
    echo.style.width = '80%';
    echo.style.maxWidth = '600px';
    echo.style.zIndex = '1';
    
    document.body.appendChild(echo);
    
    const timeout = setTimeout(() => {
      if (echo.parentNode) {
        echo.parentNode.removeChild(echo);
      }
      echoElements.current = echoElements.current.filter(e => e.id !== echoId);
    }, 3000);
    
    echoElements.current.push({ id: echoId, element: echo, timeout });
  };

  const createTextualEcho = (sourceSection: HTMLElement, targetSection: HTMLElement) => {
    const sourceText = sourceSection.querySelector('p');
    if (!sourceText) return;
    
    const words = sourceText.textContent?.split(' ') || [];
    const keyPhrase = words.slice(0, 3).join(' ') + '...';
    
    const textEcho = document.createElement('div');
    const echoId = Math.random().toString(36).substr(2, 9);
    
    textEcho.classList.add('text-echo');
    textEcho.textContent = keyPhrase;
    textEcho.style.top = Math.random() * 60 + 20 + '%';
    textEcho.style.left = Math.random() * 60 + 20 + '%';
    
    targetSection.appendChild(textEcho);
    
    const timeout = setTimeout(() => {
      if (textEcho.parentNode) {
        textEcho.parentNode.removeChild(textEcho);
      }
      textEchoes.current = textEchoes.current.filter(e => e.id !== echoId);
    }, 8000);
    
    textEchoes.current.push({ id: echoId, element: textEcho, timeout });
  };

  const handleSectionDistortions = () => {
    sectionsRef.current.forEach(section => {
      if (!section) return;
      
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Entering from bottom
      if (rect.top < viewportHeight && rect.top > viewportHeight * 0.8) {
        if (!section.classList.contains('distortion-enter')) {
          section.classList.add('distortion-enter');
          setTimeout(() => {
            section.classList.remove('distortion-enter');
          }, 1000);
        }
      }
      
      // Exiting from top
      if (rect.bottom < viewportHeight * 0.2 && rect.bottom > 0) {
        if (!section.classList.contains('distortion-exit')) {
          section.classList.add('distortion-exit');
          setTimeout(() => {
            section.classList.remove('distortion-exit');
          }, 800);
        }
      }
    });
  };

  const updateMirrorElements = () => {
    const mirrorElements = document.querySelectorAll('.mirror-element');
    const scrollProgress = window.pageYOffset / (document.body.scrollHeight - window.innerHeight);
    
    mirrorElements.forEach((element, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const offset = scrollProgress * 100 * direction;
      (element as HTMLElement).style.transform += ` translateX(${offset}px)`;
    });
  };

  const triggerGlitchEffect = () => {
    if (glitchTimeout.current || !glitchOverlayRef.current) return;
    
    glitchOverlayRef.current.classList.add('glitch-active');
    
    glitchTimeout.current = setTimeout(() => {
      if (glitchOverlayRef.current) {
        glitchOverlayRef.current.classList.remove('glitch-active');
      }
      glitchTimeout.current = undefined;
    }, 300);
  };

  const createFloatingParticles = () => {
    const particleCount = window.innerWidth < 768 ? 3 : 6;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    }
  };

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  return (
    <div className="echo-chamber-app">
      {/* Background Layers */}
      <div ref={backgroundLayerRef} className="background-layer"></div>
      <div className="scan-line"></div>
      <div ref={glitchOverlayRef} className="glitch-overlay"></div>

      {/* Navigation */}
      <nav ref={navigationRef} className={`nav-container ${navVisible ? 'nav-visible' : ''}`}>
        <div className="nav-content">
          <div className="logo">Echo Chamber</div>
          <ul className="nav-links">
            <li><button onClick={() => smoothScrollTo('hero')} className="text-white hover:text-purple-400 transition-colors">Home</button></li>
            <li><button onClick={() => smoothScrollTo('narrative')} className="text-white hover:text-purple-400 transition-colors">Narrative</button></li>
            <li><button onClick={() => smoothScrollTo('echoes')} className="text-white hover:text-purple-400 transition-colors">Echoes</button></li>
            <li><button onClick={() => smoothScrollTo('depth')} className="text-white hover:text-purple-400 transition-colors">Depth</button></li>
            <li><button onClick={() => smoothScrollTo('contact')} className="text-white hover:text-purple-400 transition-colors">Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section 
          id="hero" 
          className="section hero" 
          ref={el => sectionsRef.current[0] = el!}
        >
          <div className="mirror-element mirror-left"></div>
          <div className="mirror-element mirror-right"></div>
          <div className="section-content">
            <h1>Echo Chamber Narrative</h1>
            <p>Where past information subtly influences the present, creating a dreamlike flow of interconnected thoughts and memories.</p>
            <button 
              onClick={() => smoothScrollTo('narrative')} 
              className="cta-button"
            >
              Begin the Journey
            </button>
            {/* Dynamic particles for atmosphere */}
            <div className="particle" style={{ top: '20%', left: '10%' }}></div>
            <div className="particle" style={{ top: '60%', left: '80%' }}></div>
            <div className="particle" style={{ top: '40%', left: '60%' }}></div>
          </div>
        </section>

        {/* Narrative Section */}
        <section 
          id="narrative" 
          className="section content-section" 
          ref={el => sectionsRef.current[1] = el!}
        >
          <div className="section-content">
            <h2>The Lingering Presence</h2>
            <p>In the digital realm, information doesn't simply disappear. It leaves traces, shadows, and echoes that persist beyond their initial moment of existence. These fragments of data create a haunting beauty, a narrative that unfolds not in linear time but in layers of memory.</p>
            <p>Each interaction becomes a ripple in the digital consciousness, where past and present merge into a singular, flowing experience. The boundaries between what was and what is begin to blur, creating new forms of understanding.</p>
          </div>
        </section>

        {/* Echoes Section */}
        <section 
          id="echoes" 
          className="section content-section" 
          ref={el => sectionsRef.current[2] = el!}
        >
          <div className="section-content">
            <h2>Distorted Reflections</h2>
            <p>The echo chamber doesn't merely repeat—it transforms. Each iteration carries the weight of its predecessors while adding new dimensions of meaning. Like light passing through a prism, information refracts into spectrum of possibilities.</p>
            <p>These distortions are not errors but features, creating a rich tapestry of interconnected narratives that speak to the complexity of digital existence. The familiar becomes strange, the strange becomes beautiful.</p>
          </div>
        </section>

        {/* Depth Section */}
        <section 
          id="depth" 
          className="section content-section" 
          ref={el => sectionsRef.current[3] = el!}
        >
          <div className="section-content">
            <h2>Layers of Understanding</h2>
            <p>Beneath the surface of each interaction lies an infinite depth of context and meaning. The echo chamber reveals these hidden layers, making visible the invisible connections that bind our digital experiences together.</p>
            <p>In this space between spaces, new narratives emerge—stories that exist not in isolation but in the resonance between different moments, different voices, different perspectives.</p>
            <p>The journey through the echo chamber is ultimately a journey inward, a exploration of how information shapes consciousness and how consciousness shapes information in return.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="section content-section" 
          ref={el => sectionsRef.current[4] = el!}
        >
          <div className="section-content">
            <h2>Enter the Echo</h2>
            <p>The narrative continues beyond this digital space. Each visitor adds their own layer to the echo chamber, contributing to an ever-evolving story that exists in the spaces between technology and consciousness.</p>
            <button className="cta-button">
              Join the Narrative
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

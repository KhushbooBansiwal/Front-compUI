import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import '../styles/home.css'

const Home = () => {
  const heroRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const githubButtonRef = useRef(null);



  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
      gsap.fromTo([ctaButtonRef.current, githubButtonRef.current], { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)', stagger: 0.2 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div>
   

      <section ref={heroRef} className="hero">
        <div className="hero-content">
          <h1>Enhance Your Frontend Skills</h1>
          <p>Practice coding live and get real-time feedback with interactive exercises.</p>
          <Link to="/components">
            <button ref={ctaButtonRef} className="hero-btn">Get Started</button>
          </Link>
          <a href="https://github.com/KhushbooBansiwal/Front-compUI.git" target="_blank" rel="noopener noreferrer" ref={githubButtonRef} className="github-btn">
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;

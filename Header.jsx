import React, { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      transition: 'background-color 0.3s ease',
      backgroundColor: scrolled ? 'rgba(10, 10, 25, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#ffffff' }}>
        PORTFOLIO
      </div>
      
      <nav>
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '30px',
          margin: 0,
          padding: 0
        }}>
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                padding: '5px 0',
                position: 'relative',
                transition: 'color 0.3s ease'
              }}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

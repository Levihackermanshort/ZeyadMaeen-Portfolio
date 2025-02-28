import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    
    if (title && subtitle) {
      setTimeout(() => {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }, 300);
      
      setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }, 800);
    }
  }, []);
  
  return (
    <section id="home" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0 20px',
      textAlign: 'center',
      position: 'relative'
    }}>
      <h1 ref={titleRef} style={{
        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
        fontWeight: '700',
        margin: '0 0 20px 0',
        color: 'white',
        opacity: '0',
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        lineHeight: '1.1'
      }}>
        Creative <span style={{ color: '#8a2be2' }}>Developer</span> & Designer
      </h1>
      
      <p ref={subtitleRef} style={{
        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
        maxWidth: '600px',
        margin: '0 auto',
        color: 'rgba(255, 255, 255, 0.8)',
        opacity: '0',
        transform: 'translateY(30px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
        transitionDelay: '0.3s',
        lineHeight: '1.6'
      }}>
        Building digital experiences with attention to detail, animation, and interaction.
      </p>
      
      <div style={{
        marginTop: '40px',
        opacity: '0',
        transform: 'translateY(30px)',
        animation: 'fadeIn 0.8s ease forwards 1.2s'
      }}>
        <button style={{
          padding: '12px 28px',
          backgroundColor: '#8a2be2',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          fontSize: '1rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(138, 43, 226, 0.4)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}>
          Explore Projects
        </button>
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

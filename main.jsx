import React from 'react';
import ReactDOM from 'react-dom/client';
import AnimatedBackground from 'AnimatedBackground';
import Header from 'Header';
import Hero from 'Hero';
import About from 'About';
import Projects from 'Projects';
import Footer from 'Footer';

const App = () => {
  return (
    <div style={{
      backgroundColor: '#0a0a19',
      color: '#ffffff',
      fontFamily: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
      overflowX: 'hidden',
      position: 'relative',
      minHeight: '100vh'
    }}>
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

// Smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

// Global styles
const style = document.createElement('style');
style.textContent = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    overflow-x: hidden;
  }
  
  button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(138, 43, 226, 0.5);
  }
  
  a, button {
    cursor: pointer;
  }
  
  a:hover {
    color: #8a2be2 !important;
    border-color: #8a2be2 !important;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
document.head.appendChild(style);

const container = document.getElementById('renderDiv');
const root = ReactDOM.createRoot(container);
root.render(<App />);

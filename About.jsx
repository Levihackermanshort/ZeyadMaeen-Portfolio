import React from 'react';

export default function About() {
  const skills = [
    "JavaScript", "React", "Three.js", "Node.js", 
    "UI/UX Design", "Animation", "Responsive Design"
  ];

  return (
    <section id="about" style={{
      minHeight: '100vh',
      padding: '120px 40px',
      position: 'relative',
      background: 'linear-gradient(to bottom, rgba(10, 10, 25, 0), rgba(10, 10, 25, 0.7), rgba(10, 10, 25, 0))'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '50px',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            color: 'white',
            marginBottom: '20px',
            position: 'relative',
            display: 'inline-block'
          }}>
            About Me
            <span style={{
              position: 'absolute',
              bottom: '-8px',
              left: '0',
              width: '40%',
              height: '3px',
              background: 'linear-gradient(90deg, #8a2be2, transparent)',
              borderRadius: '2px'
            }}></span>
          </h2>
          
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '20px'
          }}>
            I am a creative developer passionate about building immersive web experiences. 
            With a background in both design and development, I focus on creating engaging 
            digital solutions that combine aesthetic appeal with technical excellence.
          </p>
          
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '30px'
          }}>
            My approach involves understanding the goals of each project and 
            implementing solutions that deliver both visual impact and exceptional user experience.
          </p>
        </div>
        
        <div style={{
          backgroundColor: 'rgba(25, 25, 45, 0.5)',
          borderRadius: '12px',
          padding: '30px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h3 style={{
            fontSize: '1.3rem',
            color: 'white',
            marginBottom: '20px'
          }}>
            Skills & Expertise
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            {skills.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: 'rgba(138, 43, 226, 0.2)',
                color: 'white',
                padding: '8px 15px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                border: '1px solid rgba(138, 43, 226, 0.3)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

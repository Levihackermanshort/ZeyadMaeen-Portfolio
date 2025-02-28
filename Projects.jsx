import React from 'react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern online shopping experience with React and Node.js.",
      category: "Web Development"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive financial management application.",
      category: "Mobile App"
    },
    {
      id: 3,
      title: "Interactive Dashboard",
      description: "Data visualization and analytics platform with real-time updates.",
      category: "UI/UX Design"
    }
  ];

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '120px 40px 80px',
      position: 'relative',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          color: 'white',
          marginBottom: '60px',
          textAlign: 'center',
          position: 'relative',
          display: 'inline-block',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          Featured Projects
          <span style={{
            position: 'absolute',
            bottom: '-10px',
            left: '0',
            width: '60%',
            height: '4px',
            background: 'linear-gradient(90deg, #8a2be2, transparent)',
            borderRadius: '2px'
          }}></span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px',
        }}>
          {projects.map((project) => (
            <div key={project.id} style={{
              backgroundColor: 'rgba(25, 25, 40, 0.7)',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              height: '280px',
              cursor: 'pointer',
            }}>
              <span style={{
                color: '#8a2be2',
                fontSize: '0.9rem',
                marginBottom: '15px',
              }}>
                {project.category}
              </span>
              <h3 style={{
                fontSize: '1.5rem',
                color: 'white',
                marginBottom: '15px',
              }}>
                {project.title}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '25px',
                lineHeight: '1.6',
              }}>
                {project.description}
              </p>
              <button style={{
                marginTop: 'auto',
                alignSelf: 'flex-start',
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '20px',
                padding: '8px 16px',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, border-color 0.3s ease',
              }}>
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

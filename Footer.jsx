import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      padding: '50px 40px',
      backgroundColor: 'rgba(10, 10, 25, 0.9)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{
          fontSize: '2rem',
          color: 'white',
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Let's Connect
        </h2>
        
        <p style={{
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '30px',
          textAlign: 'center',
          maxWidth: '500px'
        }}>
          Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {['Email', 'LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
            <a 
              key={platform}
              href="#"
              style={{
                color: 'white',
                textDecoration: 'none',
                padding: '8px 15px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '20px',
                transition: 'background-color 0.3s ease, border-color 0.3s ease'
              }}
            >
              {platform}
            </a>
          ))}
        </div>
        
        <div style={{
          color: 'rgba(255, 255, 255, 0.5)',
          fontSize: '0.9rem',
          textAlign: 'center'
        }}>
          © 2024 Portfolio. All rights reserved.
          <div style={{ marginTop: '10px' }}>© 2024 created by Zeyad Maeen</div>
        </div>
      </div>
    </footer>
  );
}

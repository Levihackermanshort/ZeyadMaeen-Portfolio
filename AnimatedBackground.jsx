import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function AnimatedBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const posArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
    });
    
    // Particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    // Glowing orbs (a few larger, colorful points)
    const orbCount = 15;
    const orbGeometry = new THREE.BufferGeometry();
    const orbPositions = new Float32Array(orbCount * 3);
    const orbColors = new Float32Array(orbCount * 3);
    const orbSizes = new Float32Array(orbCount);
    
    for (let i = 0; i < orbCount; i++) {
      const i3 = i * 3;
      orbPositions[i3] = (Math.random() - 0.5) * 25;
      orbPositions[i3 + 1] = (Math.random() - 0.5) * 25;
      orbPositions[i3 + 2] = (Math.random() - 0.5) * 15;
      
      // Random colors
      orbColors[i3] = Math.random() * 0.5 + 0.5; // R: More toward blue/purple
      orbColors[i3 + 1] = Math.random() * 0.3; // G: Lower for more blue/purple look
      orbColors[i3 + 2] = Math.random() * 0.5 + 0.5; // B: Higher
      
      // Varying sizes
      orbSizes[i] = Math.random() * 0.3 + 0.1;
    }
    
    orbGeometry.setAttribute('position', new THREE.BufferAttribute(orbPositions, 3));
    orbGeometry.setAttribute('color', new THREE.BufferAttribute(orbColors, 3));
    
    const orbMaterial = new THREE.PointsMaterial({
      size: 1.0,
      vertexColors: true,
      map: createCircleTexture(),
      transparent: true,
      depthWrite: false,
    });
    
    const orbs = new THREE.Points(orbGeometry, orbMaterial);
    scene.add(orbs);

    // Function to create circular texture for points
    function createCircleTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 128;
      
      const context = canvas.getContext('2d');
      context.beginPath();
      context.arc(64, 64, 60, 0, Math.PI * 2);
      
      // Create gradient
      const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(0.5, 'rgba(210, 210, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(100, 100, 255, 0)');
      
      context.fillStyle = gradient;
      context.fill();
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    }

    // Animation
    const orbPositionsArray = orbs.geometry.attributes.position.array;
    const orbSpeeds = Array(orbCount).fill().map(() => (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1));
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particle system
      particleSystem.rotation.x += 0.0003;
      particleSystem.rotation.y += 0.0005;

      // Move orbs around slowly
      for (let i = 0; i < orbCount; i++) {
        const i3 = i * 3;
        orbPositionsArray[i3 + 1] += orbSpeeds[i]; 
        
        // Boundary check and reverse direction
        if (Math.abs(orbPositionsArray[i3 + 1]) > 15) {
          orbSpeeds[i] *= -1;
        }
      }
      
      orbs.geometry.attributes.position.needsUpdate = true;
      
      // Rotate the camera very slightly for a subtle effect
      camera.position.x = Math.sin(Date.now() * 0.0001) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0001) * 2;
      camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      // Dispose resources
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      orbGeometry.dispose();
      orbMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
}

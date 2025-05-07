import { useEffect, useRef } from 'react';
import '../styles/background.css';

const BackgroundEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Adicionar flocos de neve/partículas
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Posicionamento aleatório
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particle.style.animationDuration = `${5 + Math.random() * 10}s`;
      
      container.appendChild(particle);
    }

    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <>
      <div className="background-container">
        <div 
          className="animated-background" 
          style={{
            backgroundImage: `url('https://i.pinimg.com/originals/97/41/f0/9741f0c6151635b29300e6f7656e1644.gif')`
          }}
        ></div>
        <div className="overlay"></div>
        <div ref={containerRef} className="particles-container"></div>
      </div>
    </>
  );
};

export default BackgroundEffect;
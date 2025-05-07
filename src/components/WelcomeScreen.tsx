import { useEffect, useState } from 'react';
import '../styles/welcome.css';

const WelcomeScreen = () => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Fade in efeito
    setTimeout(() => setOpacity(1), 300);
    
    // Fade out efeito nos últimos segundos
    const timer = setTimeout(() => setOpacity(0), 9000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-container" style={{ opacity }}>
      <h1 className="welcome-text">
        <strong>Seja bem-vindo(a) ao meu Perfil</strong>
      </h1>
    </div>
  );
};

export default WelcomeScreen;
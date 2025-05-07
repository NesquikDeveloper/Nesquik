import { useEffect, useState } from 'react';
import { Github } from 'lucide-react';
import '../styles/profile-card.css';

const ProfileCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Pequeno delay para garantir uma transição suave
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  return (
    <div className={`profile-card ${isVisible ? 'visible' : ''}`}>
      <div className="profile-banner">
        <img 
          src="https://media.discordapp.net/attachments/1167676377286324224/1369720993056292874/ChatGPT_Image_Apr_30_2025_03_55_44_PM.png?ex=681ce394&is=681b9214&hm=5dd31934aba1f047d55cc1c70000f9f2ca04f3c22b18daface36fdcafe551f4e&=&format=webp&quality=lossless&width=963&height=963" 
          alt="Banner de perfil"
          className="profile-banner-img"
        />
      </div>
      
      <div className="profile-content">
        <div className="profile-avatar">
          <img 
            src="https://media.discordapp.net/attachments/1167676377286324224/1369720993056292874/ChatGPT_Image_Apr_30_2025_03_55_44_PM.png?ex=681ce394&is=681b9214&hm=5dd31934aba1f047d55cc1c70000f9f2ca04f3c22b18daface36fdcafe551f4e&=&format=webp&quality=lossless&width=963&height=963" 
            alt="Avatar de NesquikDeveloper" 
          />
        </div>
        
        <div className="profile-info">
          <h2 className="profile-name">NesquikDeveloper</h2>
          <div className="profile-username">nesquikdeveloper</div>
          
          <div className="profile-badges">
            <span className="badge badge-green"></span>
            <span className="badge badge-orange"></span>
            <span className="badge badge-blue"></span>
          </div>
        </div>
        
        <div className="profile-section">
          <h3 className="section-title">SOBRE MIM</h3>
          <p className="section-content">
            Desenvolvedor apaixonado por criar experiências interativas.
            Transformo ideias em soluções funcionais com facilidade.
          </p>
        </div>
        
        <div className="profile-section">
          <h3 className="section-title">MEMBRO DESDE</h3>
          <p className="section-content">
            30 de abr. de 2025
          </p>
        </div>
        
        <div className="profile-section">
          <h3 className="section-title">CONEXÕES</h3>
          <div className="profile-connections">
            <a href="#" className="connection-item">
              <Github size={20} />
              <span>NesquikDeveloper</span>
              <span className="connection-badge"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
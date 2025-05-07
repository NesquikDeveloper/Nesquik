import { useEffect, useRef } from 'react';
import '../styles/music-player.css';

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Criar elemento de áudio para Spotify
    if (!audioRef.current) {
      const audio = new Audio();
      audio.src = 'https://open.spotify.com/embed/track/5g7LPDNHOzq6UPC7QyvUs5?utm_source=generator';
      audio.volume = 1.0; // Volume a 100%
      audio.loop = true;
      
      // Tentar iniciar o áudio após interação do usuário
      const startAudio = () => {
        audio.play().catch(err => console.log('Erro ao reproduzir áudio:', err));
        document.removeEventListener('click', startAudio);
      };
      
      document.addEventListener('click', startAudio);
      
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="music-player">
      <iframe 
        style={{ display: 'none' }}
        src="https://open.spotify.com/embed/track/5g7LPDNHOzq6UPC7QyvUs5?utm_source=generator" 
        width="0" 
        height="0" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
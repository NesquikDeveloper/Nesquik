import { useEffect, useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import ProfileCard from './components/ProfileCard';
import MusicPlayer from './components/MusicPlayer';
import BackgroundEffect from './components/BackgroundEffect';
import './styles/app.css';

function App() {
  const [showProfile, setShowProfile] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProfile(true);
    }, 10000); // 10 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <BackgroundEffect />
      <MusicPlayer />
      
      {!showProfile ? (
        <WelcomeScreen />
      ) : (
        <ProfileCard />
      )}
    </div>
  );
}

export default App;
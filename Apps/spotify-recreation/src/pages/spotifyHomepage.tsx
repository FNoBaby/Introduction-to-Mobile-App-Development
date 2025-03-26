import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/react';
import { playSkipBack, playSkipForward, pauseCircle, cog } from 'ionicons/icons';
import { useHistory } from 'react-router';
import '../theme/spotifyHomepage.css';
import { Album } from '../components/types';

interface SpotifyHomeProps {
  albums: Album[];
}

const SpotifyHomepage: React.FC<SpotifyHomeProps> = ({ albums }) => {
  const history = useHistory();

  const handleAlbumClick = () => {
    history.push('/library');
  };

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen className="spotify-content">
        {/* Header */}
        <div className="header-section">
          <div className="header-top-row">
            <div className="user-avatar">J</div>
            <IonIcon icon={cog} className="menu-icon" />
          </div>
          <div className="header-chips">
            <span className="chip active">For you</span>
            <span className="chip">Music</span>
            <span className="chip">Podcasts</span>
          </div>
        </div>

        {/* Albums Grid */}
        <IonGrid>
          <IonRow>
            {albums.map((album, index) => (
              <IonCol size="6" key={index}>
                <div className="album-card" onClick={handleAlbumClick}>
                  <img src={album.image} alt={album.title} />
                  <p>{album.title}</p>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SpotifyHomepage;

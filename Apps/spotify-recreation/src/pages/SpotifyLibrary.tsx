import React from 'react';
import { IonContent, IonPage, IonIcon, IonMenu, IonHeader, IonToolbar, 
         IonTitle, IonList, IonItem, IonLabel, IonButtons, IonMenuButton } from '@ionic/react';
import { menu, heart, time, download } from 'ionicons/icons';
import { Album } from '../components/types';
import '../theme/spotifyHomepage.css';

interface SpotifyLibraryProps {
  albums: Album[];
}

const SpotifyLibrary: React.FC<SpotifyLibraryProps> = ({ albums }) => {
  return (
    <>
      <IonMenu side="start" menuId="library-menu" contentId="library-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Library</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button>
              <IonIcon slot="start" icon={heart} />
              <IonLabel>Liked Songs</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={time} />
              <IonLabel>Recent</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={download} />
              <IonLabel>Downloaded</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="library-content">
        <IonContent fullscreen className="spotify-content">
          <div className="header-section">
            <div className="header-top-row">
              <div className="header-title">
                <div className="user-avatar">J</div>
                <h2 className="page-title">Your Library</h2>
              </div>
              <IonButtons>
                <IonMenuButton menu="library-menu" className="library-menu-icon" />
              </IonButtons>
            </div>
            
          </div>
          
          <div className="library-list">
            {albums.map((album, index) => (
              <div key={index} className="library-item">
                <img src={album.image} alt={album.title} />
                <div className="library-item-info">
                  <h3>{album.title}</h3>
                  <p>Playlist</p>
                </div>
              </div>
            ))}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default SpotifyLibrary;

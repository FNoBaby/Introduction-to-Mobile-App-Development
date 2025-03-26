import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();
  const screens = [
    { name: 'Worksheet4a', path: '/Worksheets/Worksheet4a' },
    { name: 'Worksheet4b', path: '/Worksheets/Worksheet4b' },
    { name: 'Worksheet4c', path: '/Worksheets/Worksheet4c' },
    { name: 'Worksheet4d', path: '/Worksheets/Worksheet4d' },
    { name: 'Worksheet4e', path: '/Worksheets/Worksheet4e' },
    { name: 'Worksheet4f', path: '/Worksheets/Worksheet4f' },
    { name: 'Worksheet4g', path: '/Worksheets/Worksheet4g' },
    { name: 'Worksheet5a', path: '/Worksheets/Worksheet5a' },
    { name: 'Worksheet5b', path: '/Worksheets/Worksheet5b' },
    { name: 'Worksheet6d', path: '/Worksheets/Worksheet6d' },
    { name: 'Worksheet6e', path: '/Worksheets/Worksheet6e' },
    { name: 'Worksheet6f', path: '/Worksheets/Worksheet6f' },
    { name: 'Spotify', path: '/Spotify_Recreation' },

    // Add more screens as needed
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Worksheets </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {screens.map((screen, index) => (
          <IonToolbar key={index}>
              <IonButton expand="block" onClick={() => history.push(screen.path)}>
              {screen.name}
            </IonButton>
          </IonToolbar>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Home;

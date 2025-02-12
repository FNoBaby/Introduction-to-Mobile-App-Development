import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();
  const screens = [
    { name: 'Worksheet4a', path: '/Worksheets/Worksheet4a' },
    { name: 'Worksheet4b', path: '/Worksheets/Worksheet4b' },
    { name: 'Worksheet4c', path: '/Worksheets/Worksheet4c' },
    // Add more screens as needed
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>First Ionic App</IonTitle>
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
